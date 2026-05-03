# ☑️ 1 Million Checkboxes

A real-time collaborative checkbox application where 1 million checkboxes are shared across all connected users. Built with **Redis**, **Socket.IO**, and **Virtual Scrolling** for smooth performance.

---

## ✨ Features

- ☑️ **1 Million Checkboxes** — All rendered smoothly via virtual scrolling
- 🔄 **Real-time Sync** — Changes broadcast instantly to all connected users via Socket.IO + Redis Pub/Sub
- 🔐 **Authentication** — Login / Signup via custom OIDC server (OAuth 2.0 Authorization Code Flow)
- 👁️ **Read-only for Guests** — Non-logged-in users can see live updates but cannot toggle checkboxes
- ⚡ **Rate Limiting** — Users can only toggle once every 5 seconds (enforced server-side via Redis)
- 🔁 **Optimistic UI Prevention** — UI only updates after server confirmation, no ghost states
- 🧹 **Auto Cleanup** — Rate limit keys auto-expire in Redis on disconnect

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JS |
| Backend | Node.js, Express.js |
| Real-time | Socket.IO |
| Pub/Sub + State | Redis (ioredis) |
| Auth | Custom OIDC Server (OAuth 2.0) |
| Containerization | Docker, Docker Compose |

---

## 📁 Folder Structure

```
root/
├── public/
│   └── index.html                  # Frontend — virtual scroll + auth UI
├── src/
│   ├── index.js                    # Entry point
│   ├── config/
│   │   └── redis.js                # Redis connection (redis, publisher, subscriber)
│   ├── controllers/
│   │   └── checkbox.controllers.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── checkbox.routes.js
│   └── services/
│       ├── checkbox.service.js     # Redis state read/write
│       └── socket.service.js      # Socket.IO + Redis Pub/Sub + rate limiting
├── .env
├── docker-compose.yaml
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- pnpm
- Docker & Docker Compose

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
pnpm i
```

### 3. Setup environment variables

Create a `.env` file in the root:

```env
PORT=8000
NODE_ENV=development

# Auth (OIDC Server)
ISSUER=https://your-oidc-server.com
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
REDIRECT_URI=http://localhost:8000

# Redis
REDIS_URL=redis://localhost:6379
```

### 4. Start Redis via Docker

```bash
docker compose up -d
```

### 5. Start the development server

```bash
pnpm run dev
```

App will be running at **http://localhost:8000** 🎉

---

## 📜 Scripts

| Script | Command | Description |
|---|---|---|
| `start` | `node src/index.js` | Production server |
| `dev` | `node --watch src/index.js` | Development with auto-reload |

---

## ⚙️ How It Works

### State Management
- Entire checkbox state (1 million booleans) stored as a JSON array in Redis
- On page load, client fetches full state from `/checkboxes` endpoint
- Individual updates are applied in-memory and persisted to Redis on each toggle

### Real-time Sync
- When a user toggles a checkbox, server updates Redis and publishes to `internal-server:checkbox:change` channel
- All connected server instances receive the message via Redis Pub/Sub and broadcast to their Socket.IO clients
- This makes the architecture horizontally scalable — multiple server instances stay in sync

### Virtual Scrolling
- Only checkboxes visible in the viewport (+ a small buffer) are in the DOM at any time
- As user scrolls, off-screen checkboxes are removed and new ones are created
- Full `state` array lives in memory — DOM is just a view over it

### Rate Limiting
- Server checks Redis for `rate-limiting:<socket.id>` key on every toggle request
- If last action was within 5 seconds, request is rejected and current Redis state is sent back to revert the UI
- Rate limit key has a 10 second TTL and is also deleted on socket disconnect

### Auth Flow
1. User clicks **Login / Sign Up** → redirected to OIDC server
2. After login, redirected back with `?code=xxx` in the URL
3. App exchanges the code for `accessToken` + `refreshToken` via `/api/auth/callback`
4. Tokens stored in **httpOnly cookies**
5. `/api/auth/me` verifies the token and returns user info
6. Logged-in users can toggle checkboxes; guests see read-only view