import express from "express"
import { addNote, deleteNote, getNote, index, updateNote } from "../controller/NoteController.js";

// the router init
const router = express.Router()

router.get('/', index);
router.post('/', addNote);
router.get('/:id', getNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;