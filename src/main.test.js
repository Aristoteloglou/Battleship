let ship = require('./main')

describe("Ship Class", () => {
    

    test("Hit method.", () => {
        let testShip = new ship.Ship(3);
        testShip.hit()

        expect(testShip.hits).toEqual(1);
    });

    test("Ship Sunk.", () => {
        let testShip = new ship.Ship(1);
        testShip.hit()


        expect(testShip.sunk).toBe(true);
    });
});

describe("Vertice constructor",() => {

    test("Test vertice constructor with empty", () => {
        let vertice = ship.verticeCord("empty", 1, 1);
        expect(vertice).toEqual({type: "empty", x: [1], y: [1]});
    })

    test("Test vertice constructor with ship.", () => {
        let vertice = new ship.Ship(4, [0,1,2,3,4], [0,0,0,0]);
        console.log(vertice);
        expect(vertice).toEqual({hits: 0, length: 4, sunk: false,});
    })
});


describe("Gameboard Class", () => {
    let gameboard;

    beforeEach(()=> {
        gameboard = new ship.GameBoard();
        gameboard.placeShip(4, [0,1,2,3], [0,0,0,0]);
    })

    test("If Gameboard placeShip() pushes to array.", () => {
        
        expect(gameboard.gameMap[1].type.hits).toBe(0);
    });

    test("If Gameboard receiveAttack() on ship.", () => {
        gameboard.receiveAttack(1,0);
        expect(gameboard.gameMap[1].type.hits).toBe(1);
    });

    test("If Gameboard receiveAttack() on empty land.", () => {
        gameboard.receiveAttack(1,1);
        expect(gameboard.gameMap[1].type.hits).toBe(0);
        expect(gameboard.gameMap[0].type).toBe("empty");
    });

    test("If Gameboard checkShips() works on ships.", () => {
        expect(gameboard.checkShips()).toBe(false);
    })

    test("If Gameboard checkShips() works on ships.", () => {
        gameboard.receiveAttack(0,0);
        gameboard.receiveAttack(1,0);
        gameboard.receiveAttack(2,0);
        gameboard.receiveAttack(3,0);
        expect(gameboard.checkShips()).toBe(true);
    })
});

describe("Player Test",() => {

    test("Player Send attack", () => {
        let playerOne = new ship.Player();
        let playerTwo = new ship.Player();
        playerTwo.gameboard.placeShip(4, [0,1,2,3], [0,0,0,0]);
        playerOne.sendAttack(0,0 ,playerTwo)
        expect(playerTwo.gameboard.gameMap[1].type.hits).toEqual(1);
    })

});