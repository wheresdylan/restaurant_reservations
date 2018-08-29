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
        customerName: "yoda",
        phoneNumber: "123-456-789",
        customerEmail: "yoda@gmail.com",
        customerID: 1,
    },
    {
        customerName: "fdgdg",
        phoneNumber: "123-456-789",
        customerEmail: "fdgfdg@gmail.com",
        customerID: 2,
    },
    {
        customerName: "jhkjhkjh",
        phoneNumber: "123-456-789",
        customerEmail: "hjkjhk@gmail.com",
        customerID: 3,
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
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all reservations
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

// // Displays all reservations
// app.get("/api/waitlist", function (req, res) {
//     return res.json(reservations);
// });

// Create new reservations - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation= req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });

//   // Create new reservations - takes in JSON input
// app.post("/api/waitlist", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newReservation= req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     console.log(newReservation);
  
//     reservations.push(newReservation);
  
//     res.json(newReservation);
//   });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
