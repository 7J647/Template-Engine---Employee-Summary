// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern {
    constructor(school) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.school = school;
    }
}
// getRole(){
//     if (this.school) {
//         return "Intern";
//     }
// }

module.exports = Intern;


