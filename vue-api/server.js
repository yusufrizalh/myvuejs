import express from "express";
import cors from "cors";
import dbConn from "./config/database.js";
import CourseRouter from "./routes/CourseRouter.js";

import dotenv from "dotenv";
import { envs, Client } from "stytch";

dotenv.config();

const client = new Client({
  project_id: process.env.PROJECT_ID,
  secret: process.env.SECRET,
  env: envs.test,
});

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(cors());
app.use(CourseRouter);

// configure stytch
app.post("/register", async (request, response) => {
  const { email, password } = request.body;
  try {
    const result = await client.passwords.create({
      email,
      password,
      session_duration_minutes: 60,
    });
    response.json({
      success: true,
      message: "User was created!",
      token: result.session_token,
    });
  } catch (error) {
    console.error(error);
    response.json({
      success: false,
      message: error.error_message,
      error: error,
    });
  }
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;
  try {
    const result = await client.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
    response.json({
      success: true,
      message: "User was logged in!",
      token: result.session_token,
    });
  } catch (error) {
    console.error(error);
    response.json({
      success: false,
      message: error.error_message,
      error: error,
    });
  }
});

app.post("/authenticate", async (request, response) => {
  const { session_token } = request.body;
  try {
    await client.sessions.authenticate({
      session_token,
    });
    response.json({ success: true, message: "Token is valid!" });
  } catch (error) {
    console.error(error);
    response.json({
      success: false,
      message: error.error_message,
      error: error,
    });
  }
});

app.post("/logout", async (request, response) => {
  const { session_token } = request.body;
  try {
    await client.sessions.revoke({ session_token });
    response.json({ success: true, message: "User was logged out!" });
  } catch (error) {
    console.error(error);
    response.json({
      success: false,
      message: error.error_message,
      error: error,
    });
  }
});

// connect to database
try {
  dbConn.sync();
  console.log("Database connection established...");
} catch (error) {
  console.error("Unable connect database: ", error);
}

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
