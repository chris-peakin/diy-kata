const { humanCatDogYears } = require("../src");


describe("humanCatDogYears", () => {
    it("returns [10, 56, 64] when 10 is passed", () =>{
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    })
}) 