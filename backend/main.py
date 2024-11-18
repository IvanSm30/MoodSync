from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

json_db = [
    {
        "id": 1,
        "name": "ivan",
        "password": "ivan"
    },
    {
        "id": 2,
        "name": "alex",
        "password": "alex"
    }
]

app = FastAPI()

class AuthRequest(BaseModel):
    name: str
    password: str

@app.post("/api/auth")
async def auth(request: AuthRequest):
    for item in json_db:
        if request.name == item["name"] and request.password == item["password"]:
            return {"message": f"Authenticated: {request.name}"}
    raise HTTPException(status_code=401, detail="Invalid credentials")