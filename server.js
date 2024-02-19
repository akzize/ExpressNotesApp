import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/NoteRouter.js";
import expressEjsLayouts from "express-ejs-layouts";
import methodOverride from "method-override";


// for ENV variables
config();

const app = express();

// parsing req body
app.use(express.json());
// for psrsing data comming html form // x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// to support the PUT and DELETE methodes
app.use(methodOverride('_method'));
// template engine
app.set("view engine", "ejs");
// for styles and static files
app.use(express.static("public"));
// setup a layout
app.use(expressEjsLayouts);
app.set("layout", "./layouts/layout");

// connecting to mongodb
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
// handling connection errors
db.on("error", (error) => console.error("DB Connection error: ", error));
db.once("open", () => console.log("DB connected !!!"));

// routes
app.use("/notes", router);

// handle an known routes, 404,505 ...
app.use((req, res) => {
	res.status(404).render("error/404");
});
// app port
const port = process.env.APP_PORT || 4001;

app.listen(port, () => {
	console.log(`server started in http://localhost:${port}`);
});
