const{ reverseString, capitalize }= require("./main");

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
  test("Capitalize ", () => {
    expect(capitalize("ligma")).toBe("Ligma");
  });

  test("Capitalize ", () => {
    expect(capitalize("hawai")).toBe("Hawai");
  });
})

