from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.auth.routes import auth_router
from app.users.routes import user_router
from app.database import create_db_and_tables

app = FastAPI(title="User Management System")

# Serve static files (CSS, JS, images)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Include routers
app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(user_router, prefix="/users", tags=["Users"])

@app.on_event("startup")
async def startup():
    await create_db_and_tables()
