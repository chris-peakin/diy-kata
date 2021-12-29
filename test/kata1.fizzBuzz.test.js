const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz')
    expect(fizzBuzz(6)).toBe('Fizz')
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(10)).toBe('Buzz')
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    expect(fizzBuzz(30)).toBe('FizzBuzz')
    expect(fizzBuzz(90)).toBe('FizzBuzz')
  });

  it("returns the appropriate word when a negative number is passed", () =>{
    expect(fizzBuzz(-3)).toBe('Fizz')
    expect(fizzBuzz(-5)).toBe('Buzz')
    expect(fizzBuzz(-15)).toBe('FizzBuzz')
  })

  it("returns the number when a decimal is used", () => {
    expect(fizzBuzz(3.1)).toBe(3.1)
    expect(fizzBuzz(2.5)).toBe(2.5)
    expect(fizzBuzz(35231.3)).toBe(35231.3)
  })

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toBe(4)
    expect(fizzBuzz(11)).toBe(11)
  });

  it("returns an error if a non-numerical input is passed", () =>{
    expect(fizzBuzz(true)).toBe('error')
    expect(fizzBuzz(false)).toBe('error')
    expect(fizzBuzz('Generic string')).toBe('error')
    expect(fizzBuzz(undefined)).toBe('error')
    expect(fizzBuzz(NaN)).toBe(NaN)
    //an exception is made for NaN, because NaN is confusingly, also a number!
    expect(fizzBuzz(null)).toBe('error')
  })
});
