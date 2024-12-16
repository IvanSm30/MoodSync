from pydantic import BaseModel


class AuthRequest(BaseModel):
    login: str
    password: str


class UserCreate(BaseModel):
    username: str
    age: int
    gender: str
    login: str
    password: str
