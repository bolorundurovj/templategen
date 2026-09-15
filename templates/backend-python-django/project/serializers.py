import json


def parse_json_body(request):
    """Parse JSON body from request safely."""
    try:
        if not request.body:
            return {}
        return json.loads(request.body.decode('utf-8'))
    except (ValueError, UnicodeDecodeError):
        return None
