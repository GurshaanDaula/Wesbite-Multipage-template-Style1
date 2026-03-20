const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home", { title: "Home", pageName: "Home" });
});

app.get("/page2", (req, res) => {
    res.render("page2", { title: "Page 2", pageName: "Page 2" });
});

app.get("/page3", (req, res) => {
    res.render("page3", { title: "Page 3", pageName: "Page 3" });
});

app.get("/page4", (req, res) => {
    res.render("page4", { title: "Page 4", pageName: "Page 4" });
});

app.get("/page5", (req, res) => {
    res.render("page5", { title: "Page 5", pageName: "Page 5" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});