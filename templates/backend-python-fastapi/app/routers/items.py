from fastapi import APIRouter, HTTPException
from datetime import datetime
from typing import List
from app.models import ItemCreate, ItemUpdate, ItemResponse

router = APIRouter(prefix="/api/items", tags=["items"])

items_db: List[dict] = []
next_id = 1


@router.get("/", response_model=List[ItemResponse])
def list_items():
    return items_db


@router.get("/{item_id}", response_model=ItemResponse)
def get_item(item_id: str):
    item = next((i for i in items_db if i["id"] == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item


@router.post("/", response_model=ItemResponse, status_code=201)
def create_item(data: ItemCreate):
    global next_id
    now = datetime.utcnow().isoformat()
    item = {
        "id": str(next_id),
        "title": data.title,
        "description": data.description or "",
        "completed": False,
        "created_at": now,
        "updated_at": now,
    }
    next_id += 1
    items_db.append(item)
    return item


@router.put("/{item_id}", response_model=ItemResponse)
def update_item(item_id: str, data: ItemUpdate):
    item = next((i for i in items_db if i["id"] == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    if data.title is not None:
        item["title"] = data.title
    if data.description is not None:
        item["description"] = data.description
    if data.completed is not None:
        item["completed"] = data.completed
    item["updated_at"] = datetime.utcnow().isoformat()
    return item


@router.delete("/{item_id}", status_code=204)
def delete_item(item_id: str):
    global items_db
    original_len = len(items_db)
    items_db = [i for i in items_db if i["id"] != item_id]
    if len(items_db) == original_len:
        raise HTTPException(status_code=404, detail="Item not found")
    return None
