const {
  analyzeArray,
  reverseString,
  capitalize,
  calculator,
  caesarCipher,
} = require("../testExercise");

describe("Reverse String", () => {
  test('Input "YEA".', () => {
    expect(reverseString("YEA")).toBe("AEY");
  });

  test('Input "Hawai".', () => {
    expect(reverseString("Hawai")).toBe("iawaH");
  });

  test('Input "Hawai".', () => {
    expect(reverseString("LIGMA")).toBe("AMGIL");
  });

  test("Test if error thrown in wrong data input", () => {
    expect(() => {
      reverseString(1);
    }).toThrow(Error);
  });
});

describe("Capitalize", () => {
  test("Capitalize ligma", () => {
    expect(capitalize("ligma")).toBe("Ligma");
  });

  test("Capitalize hawai", () => {
    expect(capitalize("hawai")).toBe("Hawai");
  });

  test("Test if error thrown in wrong data input", () => {
    expect(() => {
      capitalize(1);
    }).toThrow(Error);
  });
});

describe("Calculator", () => {
  let calc = new calculator();

  test("Add 2 + 3 numbers to be 5 ", () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test("Wrong add Datatype test", () => {
    expect(() => calc.add(1, "a")).toThrow(Error);
  });

  test("Multiply 2 * 3 numbers to be 6 ", () => {
    expect(calc.multiply(2, 3)).toBe(6);
  });

  test("Wrong multiply Datatype test", () => {
    expect(() => calc.multiply(3, "a")).toThrow(Error);
  });

  test("Divide 6 / 3 numbers to be 2 ", () => {
    expect(calc.divide(6, 3)).toBe(2);
  });

  test("Wrong divide Datatype test", () => {
    expect(() => calc.divide(6, "a")).toThrow(Error);
  });

  test("Divide 6 - 3 numbers to be 3 ", () => {
    expect(calc.subtract(6, 3)).toBe(3);
  });

  test("Wrong subtract Datatype test", () => {
    expect(() => calc.subtract(6, "a")).toThrow(Error);
  });
});

describe("Caesar Cipher", () => {
  test("Encrypt Ligma", () => {
    expect(caesarCipher("Ligma", 1)).toBe("Mjhnb");
  });

  test("Test text wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Test case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("Test case preservation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("Analyze array", () => {
  test("Average of array of number", () => {
    expect(analyzeArray([8, 12, 4, 5])).toEqual({
      average: 7.25,
      min: 4,
      max: 12,
      length: 4,
    });
  });
});
