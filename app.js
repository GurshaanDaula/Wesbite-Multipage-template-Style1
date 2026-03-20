const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Placeholder database config import
const db = require("./config/db");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/*
    PLACEHOLDER:
    This is where session middleware would normally go.
*/
// app.use(session({...}));

/*
    PLACEHOLDER:
    Fake login state for template purposes only.
*/
let fakeLoggedInUser = null;

/*
    PLACEHOLDER:
    Fake users array for template/demo only.
    Later this would be replaced by a real database table.
*/
let fakeUsers = [];

// Routes
app.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        pageName: "Home",
        user: fakeLoggedInUser
    });
});

app.get("/page2", (req, res) => {
    res.render("page2", {
        title: "Page 2",
        pageName: "Page 2",
        user: fakeLoggedInUser
    });
});

app.get("/page3", (req, res) => {
    res.render("page3", {
        title: "Page 3",
        pageName: "Page 3",
        user: fakeLoggedInUser
    });
});

app.get("/page4", (req, res) => {
    res.render("page4", {
        title: "Page 4",
        pageName: "Page 4",
        user: fakeLoggedInUser
    });
});

app.get("/page5", (req, res) => {
    res.render("page5", {
        title: "Page 5",
        pageName: "Page 5",
        user: fakeLoggedInUser
    });
});

// Show login page
app.get("/login", (req, res) => {
    res.render("login", {
        title: "Login",
        pageName: "Login",
        user: fakeLoggedInUser,
        errorMessage: null
    });
});

// Show signup page
app.get("/signup", (req, res) => {
    res.render("signup", {
        title: "Sign Up",
        pageName: "Sign Up",
        user: fakeLoggedInUser,
        errorMessage: null,
        successMessage: null
    });
});

// Fake signup handler
app.post("/signup", (req, res) => {
    const { fullName, email, password, confirmPassword } = req.body;

    /*
        PLACEHOLDER:
        Later you would:
        - validate inputs
        - check if email already exists in database
        - hash password
        - insert new user into database
    */

    if (!fullName || !email || !password || !confirmPassword) {
        return res.render("signup", {
            title: "Sign Up",
            pageName: "Sign Up",
            user: fakeLoggedInUser,
            errorMessage: "Please fill in all fields.",
            successMessage: null
        });
    }

    if (password !== confirmPassword) {
        return res.render("signup", {
            title: "Sign Up",
            pageName: "Sign Up",
            user: fakeLoggedInUser,
            errorMessage: "Passwords do not match.",
            successMessage: null
        });
    }

    const existingUser = fakeUsers.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
        return res.render("signup", {
            title: "Sign Up",
            pageName: "Sign Up",
            user: fakeLoggedInUser,
            errorMessage: "An account with that email already exists.",
            successMessage: null
        });
    }

    const newUser = {
        id: fakeUsers.length + 1, // PLACEHOLDER: real DB auto-increment ID
        fullName,
        email,
        password // PLACEHOLDER: later store hashed password, not plain text
    };

    fakeUsers.push(newUser);

    /*
        PLACEHOLDER:
        This is where you would insert into MySQL or MongoDB.
  
        Example MySQL:
        INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)
  
        Example session after signup:
        req.session.user = {
          id: newUser.id,
          name: newUser.fullName,
          email: newUser.email
        };
    */

    fakeLoggedInUser = {
        id: newUser.id,
        name: newUser.fullName,
        email: newUser.email
    };

    return res.redirect("/");
});

// Fake login handler
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    /*
        PLACEHOLDER:
        This is where a real database query would happen.
    */

    const matchedUser = fakeUsers.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (matchedUser) {
        fakeLoggedInUser = {
            id: matchedUser.id,
            name: matchedUser.fullName,
            email: matchedUser.email
        };

        /*
            PLACEHOLDER:
            Save user to session here in a real app.
        */

        return res.redirect("/");
    }

    // fallback fake template login
    if (email && password) {
        fakeLoggedInUser = {
            id: 1,
            name: "Template User",
            email: email
        };

        return res.redirect("/");
    }

    res.render("login", {
        title: "Login",
        pageName: "Login",
        user: fakeLoggedInUser,
        errorMessage: "Please enter both email and password."
    });
});

// Fake logout
app.get("/logout", (req, res) => {
    fakeLoggedInUser = null;
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});