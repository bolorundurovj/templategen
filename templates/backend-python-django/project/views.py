from django.http import JsonResponse
from datetime import datetime

def root_view(request):
    return JsonResponse({"message": "Welcome to <%= projectName %> API"})

def health_view(request):
    return JsonResponse({
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    })
