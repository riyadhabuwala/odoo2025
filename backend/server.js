import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import authRoutes from "./routes/auth.js"; // ✅ Add this

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
ConnectDB();

// Routes
app.use("/api/auth", authRoutes); // ✅ Use routes

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express with CORS!");
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
