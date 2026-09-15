import logging
from datetime import datetime
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from project.models import Item
from project.serializers import parse_json_body

logger = logging.getLogger('project')


def root_view(request):
    return JsonResponse({"message": "Welcome to <%= projectName %> API"})


def health_view(request):
    return JsonResponse({
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    })


def info_view(request):
    return JsonResponse({
        "name": "<%= projectName %>",
        "version": "0.1.0",
        "environment": "development",
    })


@csrf_exempt
@require_http_methods(["GET", "POST"])
def items_list(request):
    if request.method == "GET":
        items = list(Item.objects.all().values())
        return JsonResponse({"data": items}, safe=False)

    data = parse_json_body(request)
    if data is None or "title" not in data:
        return JsonResponse({"error": "Title is required"}, status=400)

    item = Item.objects.create(
        title=data["title"],
        description=data.get("description", ""),
        completed=bool(data.get("completed", False))
    )
    logger.info(f"Created item {item.id}")
    return JsonResponse({"data": item.to_dict()}, status=201)


@csrf_exempt
@require_http_methods(["GET", "PUT", "DELETE"])
def item_detail(request, item_id):
    try:
        item = Item.objects.get(id=item_id)
    except Item.DoesNotExist:
        return JsonResponse({"error": "Item not found"}, status=404)

    if request.method == "GET":
        return JsonResponse({"data": item.to_dict()})

    if request.method == "PUT":
        data = parse_json_body(request)
        if data is None:
            return JsonResponse({"error": "Invalid JSON body"}, status=400)

        if "title" in data:
            item.title = data["title"]
        if "description" in data:
            item.description = data["description"]
        if "completed" in data:
            item.completed = bool(data["completed"])
        item.save()
        logger.info(f"Updated item {item.id}")
        return JsonResponse({"data": item.to_dict()})

    item.delete()
    logger.info(f"Deleted item {item_id}")
    return JsonResponse({"message": "Item deleted"})


def handler404(request, exception=None):
    logger.warning(f"404 Not Found: {request.path}")
    return JsonResponse({"error": "Not found", "status_code": 404}, status=404)


def handler500(request):
    logger.error(f"500 Internal Server Error: {request.path}")
    return JsonResponse({"error": "Internal server error", "status_code": 500}, status=500)
