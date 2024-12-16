import os
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import datetime


# engine = create_async_engine("sqlite+aiosqlite:///users.db")
engine = create_async_engine("sqlite+aiosqlite:///mood_sync_db.db")
new_session = async_sessionmaker(engine, expire_on_commit=False)

class Model(DeclarativeBase):
    pass


class User(Model):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str]
    age: Mapped[int]
    gender: Mapped[str]
    username: Mapped[str]
    password: Mapped[str]
    registrationDate: Mapped[datetime]
