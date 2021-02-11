  const Intern = require("../lib/Intern");

  describe("Intern Class", () => {
    it("Should return input for Intern", () => {
        const intern = new Intern ("Jack", 2222, "johnDoe@gmail.com", "UNC");
        expect(intern.name).toEqual("Jack");
        expect(intern.id).toEqual(2222);
        expect(intern.email).toEqual("johnDoe@gmail.com");
        expect(intern.school).toEqual("UNC");
    });
});