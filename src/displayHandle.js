let main = require("./main");

let p1 = new main.Player();
let p2 = new main.Player();

p1.gameboard.placeShip(3, [0, 1, 2], [0, 0, 0]);
p1.gameboard.placeShip(3, [0, 1, 2], [1, 1, 1]);
p1.gameboard.placeShip(4, [0, 1, 2, 3], [2, 2, 2, 2]);
p1.gameboard.placeShip(2, [0, 1], [3, 3]);
p1.gameboard.placeShip(5, [0, 1, 2, 3, 4], [4, 4, 4, 4, 4]);

p2.gameboard.placeShip(3, [0, 1, 2], [0, 0, 0]);
p2.gameboard.placeShip(3, [0, 1, 2], [1, 1, 1]);
p2.gameboard.placeShip(4, [0, 1, 2, 3], [2, 2, 2, 2]);
p2.gameboard.placeShip(2, [0, 1], [3, 3]);
p2.gameboard.placeShip(5, [0, 1, 2, 3, 4], [4, 4, 4, 4, 4]);
