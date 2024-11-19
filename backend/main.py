from fastapi import FastAPI
from backend.router import router as api

app = FastAPI()
app.include_router(api)
