class Ship{
    hits = 0;
    sunk = false;
    constructor(length){
        this.length = length;
    }

    hit(){
        this.hits++;
        this.isSunk()
    }   
    
    isSunk(){
        if(this.length === this.hits){
            this.sunk = true;
        }
    }
}




class GameBoard{
    constructor(){
        this.gameMap = [];
        this.gameMap.push(new verticeCord('empty', [], []));
    }

    placeShip(length, x ,y){
        this.gameMap.push(verticeCord(new Ship(length),x , y));
    }

    receiveAttack(xC, yC){
        this.gameMap.forEach((vertice)=> {
            if(vertice.type instanceof Ship && vertice.x.includes(xC) && vertice.y.includes(yC)){
                
                vertice.type.hit();
                return;
            }
            this.createEmpty(xC, yC);
        })
    }

    createEmpty(xC, yC){
        this.gameMap[0].x.push(xC);
        this.gameMap[0].y.push(yC);
    }

    checkShips(){
        return this.gameMap
        .filter((vertice) => vertice.type instanceof Ship)
        .every((ship) => ship.type.sunk === true);
    }
}   

function verticeCord(type,x, y){
    return { type, x: Array.isArray(x) ? x : [x], y: Array.isArray(y) ? y : [y] };

}


module.exports={Ship, GameBoard, verticeCord}