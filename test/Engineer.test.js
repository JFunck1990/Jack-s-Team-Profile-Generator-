const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    it("Should return input for Engineere", () => {
        const engineer = new Engineer ("Jack", 1234, "johnDoe@gmail.com", "JFunck1990");
        expect(engineer.name).toEqual("Jack");
        expect(engineer.id).toEqual(1234);
        expect(engineer.email).toEqual("johnDoe@gmail.com");
        expect(engineer.github).toEqual("JFunck1990");
    });
});