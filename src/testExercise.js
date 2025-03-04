function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("YOU CAN ONLY ACCEPT STRING");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("YOU CAN ONLY ACCEPT STRING");
  }
  let newString = [];
  for (let c = string.length - 1; c >= 0; c--) {
    newString.push(string[c]);
  }
  newString = newString.join("");
  return newString;
}

class calculator {
  constructor() {}
  subtract(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("YOU CAN ONLY ACCEPT NUMBER");
    }
    return num1 - num2;
  }

  divide(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("YOU CAN ONLY ACCEPT NUMBER");
    }
    return num1 / num2;
  }

  multiply(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("YOU CAN ONLY ACCEPT NUMBER");
    }
    return num1 * num2;
  }

  add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("YOU CAN ONLY ACCEPT NUMBER");
    }
    return num1 + num2;
  }
}

function caesarCipher(message, encryption) {
  message = message.split("");
  let encrypted = message.map((char) => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const base = code >= 65 && code <= 90 ? 65 : 97;
      return String.fromCharCode(
        ((((code - base + encryption) % 26) + 26) % 26) + base,
      );
    } else {
      return char;
    }
  });
  encrypted = encrypted.join("");
  return encrypted;
}

function analyzeArray(array) {
  let average = 0;
  let min = array[0];
  let max = array[0];
  let i = 0;
  let length = array.length;
  while (i < length) {
    average = average + array[i];
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
    i++;
  }
  average = average / i;
  return { average, min, max, length };
}

module.exports = {
  reverseString,
  capitalize,
  calculator,
  caesarCipher,
  analyzeArray,
};
