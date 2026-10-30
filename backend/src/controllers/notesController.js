import Note from "../../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1}); //new ones first
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in Notes", error);
    res.status(500).json({ message: "Unable to get notes" });
  }
};

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const createdNote = await Note.create({ title: title, content: content });
    res.status(201).json(createdNote);
  } catch (error) {
    res.status(500).json({message:"Could not create a note"})
  }
};

export async function UpdateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },{new:true});
    if (!updatedNote) return res.status(404).json({ message: "Note not found!" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not update the note!" });
  }
};

export async function deleteNote(req, res) {
  try {
    const deletedNode = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNode) return res.status(404).json({ message: "No user found" });
    res.status(200).json({message:"Deleted Note successfully!"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not delete the note!" });
  }
};

export async function getNoteById(req, res) {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ message: "note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not get the note" });
  }
}
