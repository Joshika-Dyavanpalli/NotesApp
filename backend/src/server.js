import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv"
import rateLimiter from "../middleware/ratelimiter.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   console.log("this is just to show middleware");
//   next();
// });

app.use(rateLimiter); //middleware for rate limiting

app.use("/api/notes", notesRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("running server on ", PORT);
  });
});
  
