from fastapi import APIRouter, HTTPException

from backend.shemas import AuthRequest

json_db = [
    {"id": 1, "name": "ivan", "password": "ivan"},
    {"id": 2, "name": "alex", "password": "alex"},
]

router = APIRouter(prefix="/api")


@router.post("/auth")
async def auth(request: AuthRequest):
    for item in json_db:
        if request.name == item["name"] and request.password == item["password"]:
            return {"message": f"Authenticated: {request.name}"}
    raise HTTPException(status_code=401, detail="Invalid credentials")
