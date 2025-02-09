## Description

Backend for Nostra Pizza with email order confirmations. Orders are sent to the owner's Gmail account. MongoDB stores products and orders from authenticated users. The backend is documented with Swagger for easy API interaction. It’s optimized for scalability and performance, supporting multiple devices and ensuring smooth operation for both users and administrators.

## Run with Docker

```bash
docker-compose up --build
```

## Installation

```bash
npm install
```

## Running the app

Copy .env.example, rename it to .env and fill the environment variables.

development

```bash
npm run start
```

watch mode

```bash
npm run start:dev
```

production mode

```bash
npm run start:prod
```

Open [localhost 3000](http://localhost:3000/api)
