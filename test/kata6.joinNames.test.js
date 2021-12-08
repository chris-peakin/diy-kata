const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    /*The tests will be run from top to bottom. It's important
    to increase the array's length as we go from top to bottom
    so that during testing, situations are evaluated one at a time
    and improve the function from there. The array's length being 1, then
    2, then more than 2 are the major situations addressed.*/
    expect(joinNames([])).toBe('')
    expect(joinNames([{name: 'Han'}])).toBe('Han')
    expect(joinNames([{name: 'Jack'}, {name: 'Jill'}])).toBe('Jack & Jill')
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toBe('Bart, Lisa & Maggie')
    expect(joinNames([{name: 'Rose'}, {name: 'Martha'}, {name: 'Donna'}, {name: 'Amy'}, {name: 'Rory'}, {name: 'Clara'}, {name: 'Bill'}])).toBe('Rose, Martha, Donna, Amy, Rory, Clara & Bill')
  });
});