from fastapi import APIRouter, HTTPException
from sqlalchemy import select
from database import User, new_session
from shemas import AuthRequest


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
        if user is None:
            raise HTTPException(status_code=401)
