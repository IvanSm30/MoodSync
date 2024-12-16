from fastapi import FastAPI
from router import router as api


app = FastAPI()
app.include_router(api)
