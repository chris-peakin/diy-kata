const { joinNames } = require("../src");

describe("joinNames", () => {

  test("returns an emtpy string if an empty array is inputted", () =>{
    expect(joinNames([])).toBe('')
  });

  test("returns a string containing a single name if the array contains only one object", () =>{
    expect(joinNames([{name: 'Han'}])).toBe('Han')
  });

  test("returns a string containing two names separated by an ampersand if the array contains two objects", () =>{
    expect(joinNames([{name: 'Jack'}, {name: 'Jill'}])).toBe('Jack & Jill')
  });

  test("otherwise, if the array contains three or more objects, returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toBe('Bart, Lisa & Maggie')
    expect(joinNames([{name: 'Rose'}, {name: 'Martha'}, {name: 'Donna'}, {name: 'Amy'}, {name: 'Rory'}, {name: 'Clara'}, {name: 'Bill'}])).toBe('Rose, Martha, Donna, Amy, Rory, Clara & Bill')
  });
});