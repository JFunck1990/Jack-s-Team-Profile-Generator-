const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    it("Should return input for Manager", () => {
        const manager = new Manager ("Jack", 31435 , "johnDoe@gmail.com", 1111);
        expect(manager.name).toEqual("Jack");
        expect(manager.id).toEqual(31435);
        expect(manager.email).toEqual("johnDoe@gmail.com");
        expect(manager.officeNumber).toEqual(1111);
    });
});