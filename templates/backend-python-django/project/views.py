import logging
from datetime import datetime, timezone
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
        "timestamp": datetime.now(timezone.utc).isoformat()
    })


def info_view(request):
    return JsonResponse({
        "name": "<%= projectName %>",
        "version": "0.1.0",
        "environment": "development",
    })


memory_items = []
memory_next_id = 1


@csrf_exempt
@require_http_methods(["GET", "POST"])
def items_list(request):
    global memory_next_id
    if request.method == "GET":
        try:
            items = list(Item.objects.all().values())
            return JsonResponse({"data": items}, safe=False)
        except Exception:
            return JsonResponse({"data": memory_items}, safe=False)

    data = parse_json_body(request)
    if data is None or "title" not in data:
        return JsonResponse({"error": "Title is required"}, status=400)

    try:
        item = Item.objects.create(
            title=data["title"],
            description=data.get("description", ""),
            completed=bool(data.get("completed", False))
        )
        logger.info(f"Created item {item.id}")
        return JsonResponse({"data": item.to_dict()}, status=201)
    except Exception:
        now = datetime.now(timezone.utc).isoformat()
        item_data = {
            "id": memory_next_id,
            "title": data["title"],
            "description": data.get("description", ""),
            "completed": bool(data.get("completed", False)),
            "created_at": now,
            "updated_at": now,
        }
        memory_next_id += 1
        memory_items.append(item_data)
        return JsonResponse({"data": item_data}, status=201)


@csrf_exempt
@require_http_methods(["GET", "PUT", "DELETE"])
def item_detail(request, item_id):
    try:
        item = Item.objects.get(id=item_id)
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
    except Item.DoesNotExist:
        return JsonResponse({"error": "Item not found"}, status=404)
    except Exception:
        match = next((i for i in memory_items if i["id"] == int(item_id)), None)
        if not match:
            return JsonResponse({"error": "Item not found"}, status=404)
        if request.method == "GET":
            return JsonResponse({"data": match})
        if request.method == "PUT":
            data = parse_json_body(request)
            if data is None:
                return JsonResponse({"error": "Invalid JSON body"}, status=400)
            if "title" in data:
                match["title"] = data["title"]
            if "description" in data:
                match["description"] = data["description"]
            if "completed" in data:
                match["completed"] = bool(data["completed"])
            match["updated_at"] = datetime.now(timezone.utc).isoformat()
            return JsonResponse({"data": match})
        memory_items.remove(match)
        return JsonResponse({"message": "Item deleted"})


def handler404(request, exception=None):
    logger.warning(f"404 Not Found: {request.path}")
    return JsonResponse({"error": "Not found", "status_code": 404}, status=404)


def handler500(request):
    logger.error(f"500 Internal Server Error: {request.path}")
    return JsonResponse({"error": "Internal server error", "status_code": 500}, status=500)
