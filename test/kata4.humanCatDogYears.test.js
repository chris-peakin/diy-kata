const { humanCatDogYears } = require("../src");


describe("humanCatDogYears", () => {
    it("returns [0, 0, 0] if 0 is passed, incase the user enters 0, however unlikely", () => {
        expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    })

    it("returns [1, 15, 15] if 1 is passed", () =>{
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    })

    it ("returns [2, 24, 24] if 2 is passed", () => {
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    })

    it ("returns [3, 28, 29] if 3 is passed, the lowest number where cats and dogs diverge in age", () => {
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    })

    it("returns [10, 56, 64] when 10 is passed for example", () =>{
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(15)).toEqual([15, 76, 89]);
    })

    it("returns an error if a negative number is passed", () => {
        expect(humanCatDogYears(-1)).toEqual('error!');
        expect(humanCatDogYears(-2)).toEqual('error!');
        expect(humanCatDogYears(-15)).toEqual('error!');
    })
}) 
