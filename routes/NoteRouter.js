import express from "express"
import { addNote, createNote, deleteNote, editNote, index, updateNote } from "../controller/NoteController.js";

// the router init
const router = express.Router()

router.get('/', index);
router.post('/', addNote);
router.get('/new-note', createNote);
router.get('/:id', editNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;