# Book My Ticket 🎬

A cinema seat booking system with JWT authentication built for ChaiCode Hackathon.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Auth:** JWT (Access + Refresh Tokens)
- **Validation:** Zod
- **Password Hashing:** bcrypt

## Prerequisites

- Node.js
- Docker

## Setup

**1. Clone the repo and install dependencies:**
```bash
npm install
```

**2. Start PostgreSQL with Docker:**
```bash
docker run -d --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=sql_class_2_db -p 5433:5432 postgres
```

**3. Create tables — open psql inside Docker:**
```bash
docker exec -it postgres psql -U postgres -d sql_class_2_db
```

Then run:
```sql
CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    isbooked INT DEFAULT 0
);

INSERT INTO seats (isbooked)
SELECT 0 FROM generate_series(1, 20);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE refresh_tokens (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**4. Create a `.env` file:**
```env
JWT_ACCESS_SECRET=your_access_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here
PORT=8080
```

**5. Start the server:**
```bash
node index.mjs
```

Server will start at `http://localhost:8080`

## API Routes

### Auth

| Method | Route | Description | Auth Required |
|--------|-------|-------------|---------------|
| POST | `/signup` | Register a new user | No |
| POST | `/login` | Login and get tokens | No |
| POST | `/refresh` | Get new access token | No |

### Seats

| Method | Route | Description | Auth Required |
|--------|-------|-------------|---------------|
| GET | `/seats` | Get all seats | No |
| PUT | `/:id` | Book a seat | Yes |

## Request & Response Examples

### POST /signup
```json
// Request
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "password": "password123"
}

// Response 201
{
  "message": "User created successfully",
  "data": {
    "accessToken": "eyJ...",
    "refreshToken": "eyJ..."
  }
}
```

### POST /login
```json
// Request
{
  "email": "rahul@example.com",
  "password": "password123"
}

// Response 200
{
  "message": "Login successful",
  "data": {
    "accessToken": "eyJ...",
    "refreshToken": "eyJ..."
  }
}
```

### POST /refresh
```json
// Request
{
  "refreshToken": "eyJ..."
}

// Response 200
{
  "message": "Refresh token successful",
  "data": {
    "accessToken": "eyJ...",
    "refreshToken": "eyJ..."
  }
}
```

### PUT /:id (Protected)
```
Header: Authorization: Bearer <accessToken>
```
```json
// Response 200
{
  "rowCount": 1,
  ...
}
```

## Authentication Flow

1. User signs up → gets access token (15min) + refresh token (7d)
2. User uses access token to book seats
3. Access token expires → use refresh token to get a new one
4. Refresh tokens are rotated on every use (old token invalidated)

## Security Features

- Passwords hashed with bcrypt (10 salt rounds)
- JWT access and refresh tokens use separate secrets
- Refresh token rotation on every use
- SQL injection prevention using parameterized queries (`$1, $2`)
- Zod validation on all request payloads
- Database-level unique constraint on email