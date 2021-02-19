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
test("Should return the value for each method for Intern", () => {
  const newIntern = new Intern("Jack", 222 , "johnDoe@gmail.com", "UNC");
  expect(newIntern.getName()).toEqual(newIntern.name);
  expect(newIntern.getId()).toEqual(newIntern.id);
  expect(newIntern.getEmail()).toEqual(newIntern.email);
  expect(newIntern.getSchool()).toEqual(newIntern.school);
  expect(newIntern.getRole()).toEqual("Intern");
}) 