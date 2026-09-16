from datetime import datetime, timezone
from typing import Optional, Dict, Any


class Item:
    def __init__(
        self,
        id: int,
        title: str,
        description: str = "",
        completed: bool = False,
        created_at: Optional[str] = None,
        updated_at: Optional[str] = None,
    ):
        self.id = id
        self.title = title
        self.description = description
        self.completed = completed
        now = datetime.now(timezone.utc).isoformat()
        self.created_at = created_at or now
        self.updated_at = updated_at or now

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "completed": self.completed,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
