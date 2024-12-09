from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from app.database import get_db
from app.users.utils import get_users, get_user_by_id
from app.utils.templates import templates

user_router = APIRouter()

@user_router.get("/")
async def list_users_page(request: Request, db: Session = Depends(get_db)):
    users = get_users(db)
    return templates.TemplateResponse("user_list.html", {"request": request, "users": users})

@user_router.get("/{user_id}/edit")
async def edit_user_page(user_id: int, request: Request, db: Session = Depends(get_db)):
    user = get_user_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return templates.TemplateResponse("user_edit.html", {"request": request, "user": user})