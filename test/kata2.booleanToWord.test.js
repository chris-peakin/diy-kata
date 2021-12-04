const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it('returns Yes if boolean is true', () => {
    expect(booleanToWord(true)).toBe('Yes')
  })
  it('returns No if boolean is false', () => {
    expect(booleanToWord(false)).toBe('No')
  })
});
