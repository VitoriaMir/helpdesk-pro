from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI(title="HelpDesk Pro", version="1.0.0")


@app.get("/", response_class=HTMLResponse)
def read_root():
    html_content = """
    <!DOCTYPE html>
    <html>
    <head>
        <title>HelpDesk Pro</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
                text-align: center;
                margin-top: 100px;
            }
            h1 {
                color: #333;
            }
        </style>
    </head>
    <body>
        <h1>🚀 Bem-vindo ao HelpDesk Pro API</h1>
        <p>Use <a href="/docs">/docs</a> para acessar a documentação Swagger.</p>
    </body>
    </html>
    """
    return HTMLResponse(content=html_content)
