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



class renderGame{

    static gameRender(){
        let x = 0;
        let y = 0;
        while(x < 10 ){
            while(y < 10){
                if(x === p1.gameboard[0].x && y === p1.gameboard[0].x){

                }
            }
        }
    }





}






/* Figurre out a way ti establush the rendering of items in database. 
Issue is there's no "empty" item tp save space, so how will the rendering happen, in way everything is structured appropriately.
Tinkn of how to append things to gameboard appropriately with making it make sense. Think maybe all the data should be in th database.
And UI is literally interaction to daabase. Maybe dataset on div tags could work, but idk.
*/