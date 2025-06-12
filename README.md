# 🛠️ HelpDesk Pro - Sistema de Gestão de Chamados Técnicos

![CI Backend](https://github.com/seu-usuario/helpdesk-pro/actions/workflows/ci-backend.yml/badge.svg)
![CI Frontend](https://github.com/seu-usuario/helpdesk-pro/actions/workflows/ci-frontend.yml/badge.svg)
![Docker Build](https://img.shields.io/docker/cloud/build/seu-usuario/helpdesk-pro)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Sistema completo de gestão de chamados técnicos com arquitetura moderna, alta performance e foco em boas práticas. Desenvolvido com Python 3.12, Angular 17, PostgreSQL e Docker.

## 🌟 Recursos Destacados

- 🔐 Autenticação segura com JWT  
- 📊 Dashboard gerencial com gráficos em tempo real  
- 📱 Interface responsiva com Angular Material  
- ⚙️ API REST documentada com Swagger  
- 🔄 CI/CD automatizado com GitHub Actions  
- 📨 Notificações automáticas por e-mail  

## 🧩 Tecnologias Utilizadas

| Camada         | Tecnologias                                               |
|----------------|-----------------------------------------------------------|
| Backend        | Python 3.12, FastAPI, SQLAlchemy, Pydantic, JWT, Alembic |
| Frontend       | Angular 17, TypeScript, RxJS, Angular Material, Chart.js |
| Banco de Dados | PostgreSQL, Docker Volume                                 |
| DevOps         | Docker, Docker Compose, GitHub Actions                   |
| Extras         | Swagger, Pytest, Jasmine, SMTP, Webhooks                 |

## ✨ Funcionalidades Principais

| Módulo         | Recursos                                                                 |
|----------------|--------------------------------------------------------------------------|
| Autenticação   | Login seguro, Recuperação de senha, Controle de acesso por perfis        |
| Chamados       | Abertura, Atribuição, Rastreamento, Comentários, Upload de anexos        |
| Dashboard      | Gráficos em tempo real, KPIs de desempenho, Métricas de SLA              |
| Administração  | Gestão de usuários, Perfis (admin, técnico, cliente), Configurações do sistema |
| Integrações    | API pública REST, Webhooks, Notificações por e-mail                      |

## 🖥️ Capturas de Tela

| Dashboard Gerencial | Gestão de Chamados | Documentação da API |
|---------------------|--------------------|----------------------|
| ![Dashboard Angular](https://via.placeholder.com/800x400/4e73df/ffffff?text=Dashboard+Angular) | ![Gestão de Chamados](https://via.placeholder.com/800x400/1cc88a/ffffff?text=Gest%C3%A3o+de+Chamados) | ![Documentação Swagger](https://via.placeholder.com/800x400/36b9cc/ffffff?text=Documenta%C3%A7%C3%A3o+Swagger) |

## 🚀 Como Executar

### Pré-requisitos

- Docker e Docker Compose  
- Node.js 18+ (para desenvolvimento frontend)  
- Python 3.12 (para desenvolvimento backend)  

### Executando com Docker

```bash
git clone https://github.com/seu-usuario/helpdesk-pro.git
cd helpdesk-pro
cp .env.example .env
docker-compose up --build
```

### Desenvolvimento Local

```bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
ng serve
```

## 📂 Estrutura do Projeto

```
helpdesk-pro/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── db/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── tests/
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   ├── modules/
│   │   │   └── shared/
│   └── Dockerfile
├── docker-compose.yml
├── .github/workflows/
└── .env.example
```

## 🧪 Testes

### Backend (Pytest)

```bash
cd backend
pytest -v --cov=app --cov-report=html
```

### Frontend (Jasmine/Karma)

```bash
cd frontend
ng test
```

## 🤝 Como Contribuir

- Faça um fork do projeto  
- Crie uma branch para sua feature (`git checkout -b feature/NomeDaFeature`)  
- Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)  
- Faça push para a branch (`git push origin feature/NomeDaFeature`)  
- Abra um Pull Request  

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 👥 Autores

- Vitória Alessandra - [GitHub](https://github.com/VitoriaMir)

## 🌐 Contato

- Site: https://helpdesk-pro.example.com  
- Issues: https://github.com/seu-usuario/helpdesk-pro/issues  
- E-mail: suporte@helpdesk-pro.example.com