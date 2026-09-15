from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class MessageResponse(BaseModel):
    message: str


class HealthResponse(BaseModel):
    status: str
    timestamp: str


class InfoResponse(BaseModel):
    name: str
    version: str
    debug: bool


class ErrorResponse(BaseModel):
    detail: str
    status_code: int


class ItemBase(BaseModel):
    title: str
    description: Optional[str] = ""


class ItemCreate(ItemBase):
    pass


class ItemUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None


class ItemResponse(ItemBase):
    id: str
    completed: bool
    created_at: str
    updated_at: str
