// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tableReservation = [];
var waitList = [];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all characters
app.get("/api/reservations", function (req, res) {
    return res.json(tableReservation);
});
// Displays all waitlist
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

// Create New Characters - takes in JSON input
app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    console.log(newReservation);

    tableReservation.push(newReservation);

    return res.json(tableReservation);
});

app.post("/api/waitlist", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newWaitList = req.body;


    waitList.push(newWaitList);

    return res.json(waitList);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
