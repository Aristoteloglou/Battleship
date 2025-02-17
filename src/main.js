
function capitalize(string){
    if(typeof string !== 'string'){
        throw new Error("YOU CAN ONLY ACCEPT STRING");
    }
    return string.charAt(0).toUpperCase() + string.slice(1)

}

function reverseString(string) {
    if(typeof string !== 'string'){
        throw new Error("YOU CAN ONLY ACCEPT STRING");
    }
    let newString = [];
    for(let c = string.length - 1; c >= 0; c--){
        newString.push(string[c]);
        
    }
    newString = newString.join("");
    return newString;
}

class calculator{
    constructor(){

    }
    subtract(num1, num2){
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            throw new Error("YOU CAN ONLY ACCEPT NUMBER");
        }
        return num1 - num2;

    }

    divide(num1, num2){
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            throw new Error("YOU CAN ONLY ACCEPT NUMBER");
        }
        return num1 / num2;
    }

    multiply(num1, num2){
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            throw new Error("YOU CAN ONLY ACCEPT NUMBER");
        }
        return num1 * num2;
    }

    add(num1, num2){
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            throw new Error("YOU CAN ONLY ACCEPT NUMBER");
        }
        return num1 + num2;

    }
}


module.exports = {reverseString, capitalize, calculator};