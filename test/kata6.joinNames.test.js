const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toBe('Bart, Lisa & Maggie')
    expect(joinNames([{name: 'Rose'}, {name: 'Martha'}, {name: 'Donna'}, {name: 'Amy'}, {name: 'Rory'}, {name: 'Clara'}, {name: 'Bill'}])).toBe('Rose, Martha, Donna, Amy, Rory, Clara & Bill')
  });
});
