const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//WHAT ARE WE DOING WITH THE ABOVE VARIABLES?
//USING new Employee(parameter 1, parameter 2, etc.)??
//new Manager(name, id, email, officeNumber)
//new Engineer(name, id, email, github)
//new Intern (name, id, email, school)
//HOW DO WE GET THE INFORMATION FROM QUESTIONS TO POPULATE?


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
//WHAT ARE WE DOING WITH OUTPUTPATH ABOVE?  DOES THIS GO INTO THE FS WRITEFILE?

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeesArray = [];

buildEmployee();

//hoisting--arrow function wouldn't work on this
function buildEmployee () {

inquirer
  .prompt([

      {
        type: "input",
        name: "employeeName",
        message: "Please enter the employee's name:",
      },

      {
        type: "input",
        name: "employeeID",
        message: "Please enter the employee's ID:",
      },
  

    {
      type: "input",
      name: "employeeEmail",
      message: "Please enter the employee's email address:",
    },

    {
      type: "list",
      name: "employeeType",
      message: "Which type of employee are you adding?",
      choices: ["Manager", "Engineer", "Intern"],
    },

    { 
      type: "input",
      name: "officePhone",
      message: "Please enter the employee's office phone number:",
      //"when" did end up being able to work, just needed arrow function.  Thank you Josh!
      //I thought it made a lot of sense to do it like this
      when: answers => answers.employeeType === "Manager",
    
    }, 

    { 
      type: "input",
      name: "github",
      message: "Please enter the employee's GitHub username/handle:",
      when: answers => answers.employeeType === "Engineer",
    
    }, 

    {
      type: "input",
      name: "school",
      message: "Please enter the employee's school:",
    
      when: answers => answers.employeeType === "Intern",

    }, 
    

  ])

  .then(function(response) {   

    console.log(response);
   
     //take info from response, make a new manager, push new manager object into employees array
    if (response.employeeType === "Manager") {
      const newManager = new Manager(response.employeeName, response.employeeID, response.employeeEmail, response.officePhone);
      employeesArray.push(newManager);
    }

    else if (response.employeeType === "Engineer") {
      const newEngineer = new Engineer(response.employeeName, response.employeeID, response.employeeEmail, response.github);
      employeesArray.push(newEngineer);
    }
    
    //using else if again, rather than just else, in case they add another employee type
    else if (response.employeeType === "Intern") {
      const newIntern = new Intern(response.employeeName, response.employeeID, response.employeeEmail, response.school);
      employeesArray.push(newIntern);
    }
    console.log(employeesArray);
    buildAnother();
   
  })

    .catch (function(throwError) {
      throw throwError
    });

}

//ANOTHER FUNCTION NEEDED TO ASK WHETHER THEY WANT TO ADD ANOTHER EMPLOYEE?
//HOW DO WE STOP IT IF THEY DON'T WANT TO ADD ANY MORE?  the app just stops running, no need to "stop" it.

const buildAnother = () => {
inquirer
      .prompt (
        {
          type: "confirm",
          name: "continue",
          message: "Do you want to add another employee?",
        },
      )
      .then(function(response) {   
    
        if (response.continue) {
        //if they want to continue, 
        buildEmployee();
        }
        else {
          const employeesOutput = render (employeesArray);
           fs.writeFileSync(outputPath, employeesOutput);
           //else use render function write file

    //WHAT DO WE DO WITH THE RESPONSE?
    //IS THIS SIMILAR TO FS.WRITEFILE IN LAST HOMEWORK?  fs.writeFileSync("./output/README.MD", readMeText);
    //EXCEPT WE WRITE IT TO TEAM.HTML USING OUTPUTPATH VARIABLE ABOVE? 
    //fs.writeFileSync(outputPath, output); ??????????
        }
      
      })
      .catch (function(throwError) {
        throw throwError
      });
    }


  //HOW DO YOU PASS IN THE ARRAY OF EMPLOYEE OBJECTS
 
  //employeesArray.push(SOMETHING)

  //HOW DO YOU CALL THE RENDER FUNCTION??? 
  //SIMPLE AS render(employeesArray)???

  //HOW DO WE TEST OUT EACH CLASS AND VERIFY IT GENERATES AN OBJECT WITH THE CORRECT
//STRUCTURE AND METHODS?--console.log the employees array

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```