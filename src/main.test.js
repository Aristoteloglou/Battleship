const{ reverseString, capitalize, calculator } = require("./main");

describe("Reverse String", () => {
  test("Input \"YEA\".", () => {
    expect(reverseString("YEA")).toBe("AEY");
  });
  
  test("Input \"Hawai\".", () => {
    expect(reverseString("Hawai")).toBe("iawaH");
  });

  test("Input \"Hawai\".", () => {
    expect(reverseString("LIGMA")).toBe("AMGIL");
  });

  test("Test if error thrown in wrong data input", () =>{
    expect(() => {reverseString(1)}).toThrow(Error);
  });  

})

describe("Capitalize", () => {
  test("Capitalize ligma", () => {
    expect(capitalize("ligma")).toBe("Ligma");
  });

  test("Capitalize hawai", () => {
    expect(capitalize("hawai")).toBe("Hawai");

  });
  
  test("Test if error thrown in wrong data input", () =>{
    expect(() => {capitalize(1)}).toThrow(Error);
  });  


})


describe("Calculator", () => {
  let calc = new calculator();

  test("Add 2 + 3 numbers to be 5 ", () => {
    expect(calc.add(2,3)).toBe(5);
  });

  test("Wrong add Datatype test", () => {
    expect(() => calc.add(1,'a')).toThrow(Error);
  });

  test("Multiply 2 * 3 numbers to be 6 ", () => {
    expect(calc.multiply(2,3)).toBe(6);
  });

  test("Wrong multiply Datatype test", () => {
    expect(() => calc.multiply(3,'a')).toThrow(Error);
  });
  
  test("Divide 6 / 3 numbers to be 2 ", () => {
    expect(calc.divide(6, 3)).toBe(2);
  });

  test("Wrong divide Datatype test", () => {
    expect(() => calc.divide(6,'a')).toThrow(Error);
  });
  
  test("Divide 6 - 3 numbers to be 3 ", () => {
    expect(calc.subtract(6, 3)).toBe(3);
  });

  test("Wrong subtract Datatype test", () => {
    expect(() => calc.subtract(6,'a')).toThrow(Error);
  });
  

})

