from fastapi import APIRouter
from app.schemas.user_schema import UserCreate
from app.schemas.ticket_schema import TicketCreate

router = APIRouter(prefix="/api")

@router.post("/users")
def create_user(user: UserCreate):
    return {"message": "User created", "user": user}

@router.post("/tickets")
def create_ticket(ticket: TicketCreate):
    return {"message": "Ticket created", "ticket": ticket}
