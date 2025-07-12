import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB  from "./config/db.js";

// Load environment variables from .env
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 3000; // fallback if PORT not found

// Middleware
app.use(express.json());
app.use(cors());

//connection
ConnectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express with CORS!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});