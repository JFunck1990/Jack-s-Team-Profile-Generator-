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

test("Should return the value for each method for Manager", () => {
    const newManager = new Manager("Jack", 222 , "johnDoe@gmail.com", 4546);
    expect(newManager.getName()).toEqual(newManager.name);
    expect(newManager.getId()).toEqual(newManager.id);
    expect(newManager.getEmail()).toEqual(newManager.email);
    expect(newManager.getOfficeNumber()).toEqual(newManager.officeNumber);
    expect(newManager.getRole()).toEqual("Manager");
  }) 