from fastapi import HTTPException
from typing import List
from ..models.ticket import Ticket
from ..schemas.ticket_schema import TicketCreate
from sqlalchemy.orm import Session

def create_ticket(db: Session, ticket_data: TicketCreate) -> Ticket:
    new_ticket = Ticket(**ticket_data.dict())
    db.add(new_ticket)
    db.commit()
    db.refresh(new_ticket)
    return new_ticket

def get_tickets(db: Session) -> List[Ticket]:
    return db.query(Ticket).all()
