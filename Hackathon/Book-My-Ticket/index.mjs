//  CREATE TABLE seats (
//      id SERIAL PRIMARY KEY,
//      name VARCHAR(255),
//      isbooked INT DEFAULT 0
//  );
// INSERT INTO seats (isbooked)
// SELECT 0 FROM generate_series(1, 20);

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// CREATE TABLE refresh_tokens (
//     id SERIAL PRIMARY KEY,
//     user_id INT REFERENCES users(id),
//     token VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

import express from "express";
import pg from "pg";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import bcrypt from "bcrypt";
import { z } from "zod";
import "dotenv/config";
import jwt from "jsonwebtoken";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 8080;

const signupPayload = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(8),
});

const loginPayload = z.object({
  email: z.email(),
  password: z.string().min(8),
});

const refreshPayload = z.object({
  refreshToken: z.string(),
});

const createAccessToken = (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};

const createRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = (password, hash) => bcrypt.compare(password, hash);

// Equivalent to mongoose connection
// Pool is nothing but group of connections
// If you pick one connection out of the pool and release it
// the pooler will keep that connection open for sometime to other clients to reuse
const pool = new pg.Pool({
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "postgres",
  database: "sql_class_2_db",
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
});

const app = new express();
app.use(cors());
app.use(express.json());

// Middlware
const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.status(401).send({ error: "Unauthorized" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = verifyAccessToken(token);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "Unauthorized" });
  }
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//get all seats
app.get("/seats", async (req, res) => {
  const result = await pool.query("select * from seats"); // equivalent to Seats.find() in mongoose
  res.send(result.rows);
});

//book a seat give the seatId and your name

// singup route
const signupHandler = async (req, res) => {
  const conn = await pool.connect();

  try {
    const { name, email, password } = signupPayload.parse(req.body);

    const hashedPassword = await hashPassword(password);

    const query =
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id";

    const result = await conn.query(query, [name, email, hashedPassword]);
    const { id } = result.rows[0];

    const accessToken = createAccessToken(id, name);
    const refreshToken = createRefreshToken(id);

    await conn.query(
      "INSERT INTO refresh_tokens (user_id, token) VALUES ($1, $2)",
      [id, refreshToken],
    );

    res.status(201).send({
      message: "User created successfully",
      data: { accessToken, refreshToken },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(422).send({ error: error.errors });
      return;
    }

    if (error.code === "23505") {
      return res
        .status(409)
        .send({ error: "User with that email already exists" });
    }

    console.log(error);
    res.status(500).send({ error: "Unexpected Error Occured" });
  } finally {
    conn.release();
  }
};

app.post("/signup", signupHandler);

// login route
const loginHandler = async (req, res) => {
  const conn = await pool.connect();

  try {
    const { email, password } = loginPayload.parse(req.body);

    const query = "SELECT * FROM users WHERE email = $1";

    const result = await conn.query(query, [email]);

    if (result.rowCount === 0) {
      res.status(401).send({ error: "Invalid email or password" });
      return;
    }

    const user = result.rows[0];

    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      res.status(401).send({ error: "Invalid email or password" });
      return;
    }

    const accessToken = createAccessToken(user.id, user.name, user.email);
    const refreshToken = createRefreshToken(user.id);

    await conn.query(
      "INSERT INTO refresh_tokens (user_id, token) VALUES ($1, $2)",
      [user.id, refreshToken],
    );

    res.status(200).send({
      message: "Login successful",
      data: { accessToken, refreshToken },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(422).send({ error: error.errors });
      return;
    }

    console.log(error);
    res.status(500).send({ error: "Unexpected Error Occured" });
  } finally {
    conn.release();
  }
};

app.post("/login", loginHandler);

// refresh token route
const refreshHandler = async (req, res) => {
  const conn = await pool.connect();
  try {
    const { refreshToken } = refreshPayload.parse(req.body);

    const payload = verifyRefreshToken(refreshToken);

    const result = await conn.query(
      "SELECT * FROM refresh_tokens WHERE token = $1",
      [refreshToken],
    );

    if (result.rowCount === 0) {
      return res.status(401).send({ error: "Invalid refresh token" });
    }

    const userResult = await conn.query(
      "SELECT name FROM users WHERE id = $1",
      [payload.id],
    );

    const newAccessToken = createAccessToken(
      payload.id,
      userResult.rows[0].name,
    );
    const newRefreshToken = createRefreshToken(payload.id);

    await conn.query(
      "UPDATE refresh_tokens SET token = $1 WHERE user_id = $2",
      [newRefreshToken, payload.id],
    );

    res.status(200).send({
      message: "Refresh token successful",
      data: { accessToken: newAccessToken, refreshToken: newRefreshToken },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(422).send({ error: error.errors });
      return;
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send({ error: "Invalid Token", message: error });
    }

    console.log(error);
    res.status(500).send({ error: "Unexpected Error Occured" });
  } finally {
    conn.release();
  }
};

app.post("/refresh", refreshHandler);

app.put("/:id", authenticationMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.user.name;
    // payment integration should be here
    // verify payment
    const conn = await pool.connect(); // pick a connection from the pool
    //begin transaction
    // KEEP THE TRANSACTION AS SMALL AS POSSIBLE
    await conn.query("BEGIN");
    //getting the row to make sure it is not booked
    /// $1 is a variable which we are passing in the array as the second parameter of query function,
    // Why do we use $1? -> this is to avoid SQL INJECTION
    // (If you do ${id} directly in the query string,
    // then it can be manipulated by the user to execute malicious SQL code)
    const sql = "SELECT * FROM seats where id = $1 and isbooked = 0 FOR UPDATE";
    const result = await conn.query(sql, [id]);

    //if no rows found then the operation should fail can't book
    // This shows we Do not have the current seat available for booking
    if (result.rowCount === 0) {
      res.send({ error: "Seat already booked" });
      return;
    }
    //if we get the row, we are safe to update
    const sqlU = "update seats set isbooked = 1, name = $2 where id = $1";
    const updateResult = await conn.query(sqlU, [id, name]); // Again to avoid SQL INJECTION we are using $1 and $2 as placeholders

    //end transaction by committing
    await conn.query("COMMIT");
    conn.release(); // release the connection back to the pool (so we do not keep the connection open unnecessarily)
    res.send(updateResult);
  } catch (ex) {
    console.log(ex);
    res.send(500);
  }
});

app.listen(port, () => console.log("Server starting on port: " + port));
