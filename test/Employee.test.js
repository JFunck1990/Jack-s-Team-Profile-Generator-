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

test("Should return the value for each method for Employee", () => {
    const newEmployee = new Employee("Jack", 2121 , "johnDoe@gmail.com");
    expect(newEmployee.getName()).toEqual(newEmployee.name);
    expect(newEmployee.getId()).toEqual(newEmployee.id);
    expect(newEmployee.getEmail()).toEqual(newEmployee.email);
}) 