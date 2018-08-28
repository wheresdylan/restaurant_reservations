//Our back-end references and routing here.


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// =============================================================
var reservations = [
    {
      name: "yoda",
      phoneNumber: "123-456-789",
      email: "yoda@gmail.com",
      uniqueID: 1,
    },
    {
        name: "ddfdfgdfdg",
        phoneNumber: 54654654646,
        email: "sdfdfdsf@gmail.com",
        uniqueID: 2,
      },
      {
        name: "vbcxvcxv",
        phoneNumber: "567-890-1234",
        email: "vbvcbvc@gmail.com",
        uniqueID: 3,
      },
  ];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all reservations
app.get("/allreservations", function(req, res) {

    
    return res.json(reservations);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
