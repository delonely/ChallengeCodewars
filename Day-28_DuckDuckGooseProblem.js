//Task:

//Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
//name is a property of Player objects, e.g Player.name

/**
 * Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

Random input limits:

    6≤Players≤50
   5000≤Position≤50000
 */

function duckDuckGoose(players, goose) {
    return goose ? players[(goose - 1) % players.length].name : '';
}

const players = [
    { name: "Jo" },
    { name: "Rena" },
    { name: "Dian" },
    { name: "Rhisma" }
  ];

console.log(duckDuckGoose(players,2))