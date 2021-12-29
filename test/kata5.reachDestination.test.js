const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44,10)).toBe('I should be there in 4.5 hours.');
    expect(reachDestination(66, 6)).toBe('I should be there in 11 hours.');
    expect(reachDestination(84,9)).toBe('I should be there in 9.5 hours.')
  });
});
