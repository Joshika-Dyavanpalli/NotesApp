import express from "express";
import {
  getAllNotes,
  createNote,
  UpdateNote,
  deleteNote,
  getNoteById
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", UpdateNote);

router.delete("/:id", deleteNote);

export default router;
