import Note from "../models/Note.js";

export const index = async (req, res) => {
	try {
		const notes = await Note.find();

		res.render("index", { notes, title: "home" });
		// res.send(notes);
	} catch (error) {
		console.log(error);
		res.status(505).send(error);
	}
};

export const getNote = async (req, res) => {
	const { id } = req.params;
	console.log(id);
	try {
		const note = await Note.findById(id);
		if (!note) {
			res.status(404).send({ message: "That note is not found" });
		}
		res.send(note);
	} catch (error) {
		console.log(error);
		res.status(505).send(error);
	}
};

export const createNote = (req, res) => {
	res.render("note/create", { title: "add new note" });
};

export const addNote = async (req, res) => {
	try {
		const { title, body } = req.body;

		const newNote = new Note({ title, body });
		newNote.save();

		res.redirect("/notes");
		// res.send(newNote);
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};

export const editNote = async (req, res) => {
	const { id } = req.params;
	try {
		const note = await Note.findById(id);

		res.render("note/edit", { note, title: "edit note" });
		// res.send(updatedNote);
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};

export const updateNote = async (req, res) => {
	const { id } = req.params;
	try {
		const { title, body } = req.body;
		const updatedNote = await Note.findByIdAndUpdate(id, { title, body });

		res.redirect('index')
		// res.send(updatedNote);
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};

export const deleteNote = async (req, res) => {
	const { id } = req.params;
	try {
		await Note.findByIdAndDelete(id);

		res.redirect("/notes");
		// res.send({ message: "deleted with success" });
	} catch (error) {
		console.error(error);
		res.status(505).send(error);
	}
};
