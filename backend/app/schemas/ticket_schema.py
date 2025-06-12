from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class TicketCreate(BaseModel):
    title: str
    description: str
    priority: str
    user_id: int
    created_at: Optional[datetime] = None
