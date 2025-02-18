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

})