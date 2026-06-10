# 📚 FlashFlow 2.0

Uma aplicação Full-Stack desenvolvida para a otimização do aprendizado contínuo através da técnica de *active recall*. O ecossistema permite a criação, gerenciamento e revisão de flashcards, organizados em uma interface responsiva e alimentados por uma API REST dedicada.

---

## 🚀 Demonstração da Interface

![FlashFlow 2.0 - Interface principal](./project-img.png)

---

## 🏗️ Arquitetura e Tecnologias

O projeto adota uma arquitetura client-server, garantindo a separação estrita de responsabilidades entre a interface de usuário e a lógica de persistência de dados.

### 🎨 Frontend (Client)
* **React + TypeScript**: Tipagem estática para maior previsibilidade do estado.
* **Vite**: Ferramenta de build otimizada para alta performance no desenvolvimento.
* **CSS Modules**: Escopo local de estilização, evitando vazamento de classes.
* **Integração**: Consumo assíncrono de API REST (CRUD completo).

### ⚙️ Backend (API)
* **Node.js + Express**: Servidor web assíncrono e orientado a eventos.
* **TypeScript**: Manutenibilidade e contratos de dados tipados nas rotas e *controllers*.
* **SQLite**: Banco de dados relacional leve para persistência local.
* **CORS & Dotenv**: Gerenciamento de segurança de rotas e variáveis de ambiente.

---

## ✨ Regras de Negócio e Funcionalidades

### Gestão de Flashcards
* **Criação e Edição**: Formulários controlados para inserção e atualização de conteúdo.
* **Organização Lógica**: Filtro de cards baseado em categorização por disciplinas/tópicos.
* **Revisão Interativa**: Mecanismo de *flip* (frente/verso) para validação mental da resposta.
* **Segurança de Dados**: Validação de campos obrigatórios no servidor e confirmação de exclusão no cliente (UX).

---

## 📂 Árvore do Projeto

```text
flashflow2.0/
│
├── web/                   # Camada de Interface (Frontend)
│   ├── src/
│   │   ├── assets/        # Mídias estáticas
│   │   ├── components/    # Componentização isolada
│   │   ├── services/      # Lógica de consumo HTTP (Axios/Fetch)
│   │   ├── types/         # Interfaces e tipagens globais
│   │   ├── App.tsx        # Ponto de montagem das rotas/estado global
│   │   └── main.tsx       # Entry point do React
│
├── server/                # Camada Lógica (Backend API)
│   ├── src/
│   │   ├── controllers/   # Regras de negócio do CRUD
│   │   ├── database/      # Conexão e queries SQLite
│   │   ├── routes/        # Mapeamento de endpoints HTTP
│   │   └── server.ts      # Entry point da API (Express)
│
├── project-img.png
└── README.md
```

---

## ⚙️ Pipeline de Instalação e Execução

### 1. Clonagem e Configuração Inicial
```bash
git clone https://github.com/gustavomenacho/flashflow2.0.git
cd flashflow2.0
```

### 2. Variáveis de Ambiente
Antes de iniciar os servidores, crie os arquivos `.env` em seus respectivos diretórios:

**No diretório `server/`, crie o arquivo `.env`:**
```env
PORT=3000
DATABASE_URL=./database.sqlite
```

**No diretório `web/`, crie o arquivo `.env`:**
```env
VITE_API_URL=http://localhost:3000
```

### 3. Inicializando o Backend (API)
Abra um terminal, navegue até a camada do servidor e instale as dependências:
```bash
cd server
npm install
npm run dev
```
> **Status**: O servidor estará ouvindo requisições na porta `http://localhost:3000`

### 4. Inicializando o Frontend (Client)
Em um segundo terminal, navegue até a camada web e instale as dependências:
```bash
cd web
npm install
npm run dev
```
> **Status**: A interface estará disponível no navegador em `http://localhost:5173`

---

## 👨‍💻 Autor

**Gustavo Menacho de Almeida** Projeto desenvolvido para consolidar a aplicação de conceitos de Engenharia de Software no desenvolvimento Full-Stack, focando em estruturação de código, componentização e consumo de APIs.