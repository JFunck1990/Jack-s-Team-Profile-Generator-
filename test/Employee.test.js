const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee")

describe("Employee Class", () => {
    it('Should return input for Employee', () => {
        const employee = new Employee("Jack", 2121 , "johnDoe@gmail.com");
       expect(employee.name).toEqual("Jack")
       expect(employee.id).toEqual(2121);
       expect(employee.email).toEqual("johnDoe@gmail.com");
    });
});

