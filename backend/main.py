from fastapi import FastAPI

app = FastAPI(
    title="HelpDesk Pro",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Welcome to HelpDesk Pro API"}
