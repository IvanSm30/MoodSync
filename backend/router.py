from fastapi import APIRouter, HTTPException
from sqlalchemy import select, text
from database import User, new_session
from shemas import AuthRequest, UserCreate
from datetime import datetime

router = APIRouter(prefix="/api")


@router.post("/auth")
async def auth(request: AuthRequest):
    async with new_session() as session:
        user = await session.execute(
            select(User).where(
                User.login == request.login, User.password == request.password
            )
        )
        user = user.scalar_one_or_none()
        if user is None:
            raise HTTPException(status_code=401)


@router.post("/register")
async def register_user(user_data: UserCreate):
    async with new_session() as session:

        existing_user = await session.execute(
            select(User).where(User.login == user_data.login)
        )
        if existing_user.scalar_one_or_none() is not None:
            raise HTTPException(status_code=400, detail="Логин уже занят")

        new_user = User(
            username=user_data.username,
            age=user_data.age,
            gender=user_data.gender,
            login=user_data.login,
            password=user_data.password,
            registrationDate=datetime.now()
        )
        session.add(new_user)
        await session.commit()
        return {
            "message": "Пользователь успешно зарегистрирован",
            "user_id": new_user.id,
        }


@router.get("/check_tables")
async def check_tables():
    async with new_session() as session:
        result = await session.execute(
            text("SELECT name FROM sqlite_master WHERE type='table';")
        )
        tables = result.fetchall()
        return {"tables": [table[0] for table in tables]}
