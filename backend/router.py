from fastapi import APIRouter, HTTPException
from sqlalchemy import select
from database import User, new_session
from shemas import AuthRequest

json_db = [
    {"id": 1, "name": "ivan", "password": "ivan"},
    {"id": 2, "name": "alex", "password": "alex"},
]

router = APIRouter(prefix="/api")


@router.post("/auth")
async def auth(request: AuthRequest):
    async with new_session() as session:
        user = await session.execute(
            select(User).where(
                User.name == request.name, User.password == request.password
            )
        )
        user = user.scalar_one_or_none()
        if user:
            return {"message": f"Authenticated: {request.name}"}
        else:
            raise HTTPException(status_code=401, detail="Invalid credentials")
