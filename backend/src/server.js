import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv"
import rateLimiter from "../middleware/ratelimiter.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use(rateLimiter); //middleware for rate limiting

app.use("/api/notes", notesRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("running server on ", PORT);
  });
});
  
