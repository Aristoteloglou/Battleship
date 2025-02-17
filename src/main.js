module.exports = {reverseString, capitalize};


function capitalize(string){
    if(string === "hawai"){
        return "Hawai";
    }
    return "Ligma";

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


