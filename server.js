const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form using EJS
app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submission and render a thank-you page
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.render("thankyou", { name, email });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
