# 🧾 Projeto Cliente

Aplicação **Full Stack** desenvolvida em **TypeScript**, utilizando **React** no front-end, **Node.js** no back-end e **MongoDB** como banco de dados.  
O objetivo do projeto é realizar o **cadastro de clientes**, armazenando **nome** e **email**.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Front-end
- React  
- TypeScript  
- Axios  
- Vite *(ou Create React App, conforme seu setup)*  

### ⚙️ Back-end
- Node.js  
- Express  
- TypeScript  
- MongoDB (Mongoose)  

---

## 🧩 Funcionalidades

- Cadastro de cliente com **nome** e **email**  
- Armazenamento no **MongoDB**  
- Comunicação entre **frontend** e **backend** via **API REST**  

---

## 📦 Como Clonar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/SeuUsuario/cliente.git

# Acessar a pasta do projeto
cd cliente

# Entrar na pasta do back-end
cd backend

# Instalar dependências
npm install

# Criar um arquivo .env e adicionar as variáveis:
MONGO_URI=sua_string_de_conexao_mongodb
PORT=5000 - Sua Porta

# Rodar o servidor
npm run dev

# Entrar na pasta do front-end
cd frontend

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
