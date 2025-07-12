// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import ConnectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import itemRoutes from "./routes/item.js"; // ✅ Add this line

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// For __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // ✅ Makes /uploads accessible

// Connect to MongoDB
ConnectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes); // ✅ Mount item routes

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Express with CORS!");
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
