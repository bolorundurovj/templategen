from sanic import Sanic, json
from datetime import datetime

app = Sanic("<%= projectName %>")

@app.get("/")
async def root(request):
    return json({"message": "Welcome to <%= projectName %> API"})

@app.get("/api/health")
async def health(request):
    return json({
        "status": "ok",
        "timestamp": datetime.utcnow().isoformat()
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
