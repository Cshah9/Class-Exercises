// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Knight",
  age: 60,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/:characters", function(req, res) {
  var chosen = req.params.characters;

  console.log(req);
  console.log("__________________________________________");
  console.log("response");
  console.log (res);
  // What does this log?
  console.log(chosen);

  res.json(findCharacter(chosen));

  res.end();
});

function findCharacter(name) {
  for (var i = 0; i < characters.length; i++) {
    if (characters[i].routeName.toLowerCase().trim() == name.toLowerCase().trim()) return characters[i];
  }
  return "the force is not with you :( These are not the droids you are looking for!";
}

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
