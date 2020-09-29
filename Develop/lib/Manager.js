// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
}
    
    getSchool () {
    return this.school;
}   

    getRole () {
        return "Intern";
}
}

module.exports = Intern;

