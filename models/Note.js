// import { Schema, model } from "mongoose";
import mongoose from "mongoose";

// defining the schema
const noteSchema = new mongoose.Schema({
	title: { type: String, require: true },
	body: { type: String, require: true },
	date: { type: Date, default: Date.now },
});

// the model
const Note = mongoose.model("Note", noteSchema);

export default Note;
