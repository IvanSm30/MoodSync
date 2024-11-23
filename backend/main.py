from contextlib import asynccontextmanager
from fastapi import FastAPI
from backend.repository import add_user
from database import create_tables, delete_tables
from router import router as api


@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_tables()
    await add_user("ivan", "ivan")
    print("База готова")
    yield
    await delete_tables()
    print("База очищена")


app = FastAPI(lifespan=lifespan)
app.include_router(api)
