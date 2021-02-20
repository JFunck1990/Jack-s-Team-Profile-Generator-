const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    it("Should return input for Engineer", () => {
        const engineer = new Engineer ("Jack", 1234, "johnDoe@gmail.com", "JFunck1990");
        expect(engineer.name).toEqual("Jack");
        expect(engineer.id).toEqual(1234);
        expect(engineer.email).toEqual("johnDoe@gmail.com");
        expect(engineer.github).toEqual("JFunck1990");
    });
});

test("Should return the value for each method for Engineer", () => {
    const newEngineer = new Engineer("Jack", 2121 , "johnDoe@gmail.com", "Jfunck1990");
    expect(newEngineer.getName()).toEqual(newEngineer.name);
    expect(newEngineer.getId()).toEqual(newEngineer.id);
    expect(newEngineer.getEmail()).toEqual(newEngineer.email);
    expect(newEngineer.getGithub()).toEqual(newEngineer.github);
    expect(newEngineer.getRole()).toEqual("Engineer");
}) 