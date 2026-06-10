📚 FlashFlow 2.0

Aplicação Full Stack para criação e gerenciamento de flashcards de estudo.
O objetivo do projeto é facilitar a revisão de conteúdos através de flashcards organizados por categorias.

🚀 Demonstração

Página principal do sistema com lista de flashcards, criação, edição, exclusão e filtro por categoria.

✨ Funcionalidades
📌 Frontend
Criar flashcards
Editar flashcards existentes
Excluir flashcards com confirmação
Listar todos os flashcards
Filtrar por categoria
Visualizar pergunta e resposta com flip do card
Interface responsiva
Integração com API REST
⚙️ Backend
API REST para flashcards
Cadastro, consulta, atualização e remoção (CRUD)
Validação de dados obrigatórios
Persistência com SQLite
Estrutura organizada por camadas (controllers, routes, models)
🧠 Conceitos aplicados
Consumo de API REST
CRUD completo
Gerenciamento de estado com React Hooks
Componentização
Separação de responsabilidades
Persistência de dados
Comunicação frontend ↔ backend
🛠️ Tecnologias
Frontend
React
TypeScript
Vite
CSS Modules
Backend
Node.js
Express
TypeScript
SQLite
dotenv
CORS
📂 Estrutura do projeto
flashflow2.0/
│
├── web/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── routes/
│   │   ├── models/
│   │   └── server.ts
│
└── README.md
⚙️ Como executar o projeto
1. Clonar o repositório
git clone <repo-url>
cd flashflow2.0
2. Backend
cd server
npm install
npm run dev

Servidor:

http://localhost:3000
3. Frontend
cd web
npm install
npm run dev

Aplicação:

http://localhost:5173
🔐 Variáveis de ambiente
Backend (.env)
PORT=3000
DATABASE_URL=./database.sqlite
Frontend (.env)
VITE_API_URL=http://localhost:3000
📌 Destaques do projeto
Projeto full stack funcional
API REST própria
Interface moderna e responsiva
Estrutura escalável e organizada
Integração real frontend + backend
👨‍💻 Autor

Gustavo Menacho de Almeida

Projeto desenvolvido para prática de desenvolvimento Full Stack com foco em aprendizado e portfólio.