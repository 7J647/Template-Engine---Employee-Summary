const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//WHAT ARE WE DOING WITH THE ABOVE VARIABLES?


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


//I THINK WE NEED TO SET UP AN ARRAY OF ALL EMPLOYEES
//EACH WITH UNIQUE IDS STARTING FROM 0, add 1 to each employee
const employeesArray = [];

//NEED TO DO A FUNCTION FOR THE "ALL" EMPLOYEES QUESTIONS
//DO ALL EMPLOYEES GET TO USE THIS FUNCTION OR SHOULD WE HAVE
//A MANAGER QUESTION FIRST TO BLOCK OUT ANYONE WHO IS NOT A 
//MANAGE FROM USING?

inquirer
  .prompt([
   
   //SOMETHING LIKE THIS COULD BE THE DEFAULT QUESTION MAYBE?
    // {
    //   type: "confirm",
    //   name: "isManager",
    //   message: "Are you a Manager?",
    //   default: true,
    //   //async await here?
    // },

      {
        type: "input",
        name: "employeeName",
        message: "Please enter the employee's name:",
      },
  

    {
      type: "input",
      name: "EmployeeEmail",
      message: "Please enter the employee's email address:",
    },

    {
      type: "list",
      name: "employeeType",
      message: "Which type of employee are you adding?",
      choices: ["Manager", "Engineer", "Intern"],
    },

    //HOW TO GO TO ADDITIONAL FUNCTIONS FOR ADDITIONAL EMPLOYEE
    //QUESTIONS, THREE CATEGORIES?

    { 
      type: "input",
      name: "officePhone",
      message: "Please enter the employee's office phone number:",
      //"WHEN" DOESN'T DO ANYTHING HERE
      when: "employeeType" === "Manager",
    
    }, 

    { 
      type: "input",
      name: "officePhone",
      message: "Please enter the employee's office phone number:",
    
    }, 

    {
      type: "input",
      name: "github",
      message: "Please enter the employee's GitHub username/handle:",

    }, 
    

    {
      type: "input",
      name: "school",
      message: "Please enter the employee's college:",
  
    },
  
      
//DO WE NEED A FUNCTION TO ASK WHETHER THEY WANT TO ADD ANOTHER EMPLOYEE?
//HOW DO WE STOP IT IF THEY DON'T WANT TO ADD ANY MORE?

  ])

  .then(function(response) {
    console.log(response);
    // const readMeText = generateMarkdown(response);
    // console.log(readMeText);
    // fs.writeFileSync("./output/README.MD", readMeText);
  });

  //HOW DO YOU CALL THE RENDER FUNCTION AND PASS IN THE ARRAY OF EMPLOYEE OBJECTS
  //"SOMETHING" .push(employeesArray)?????

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


//IS THIS SIMILAR TO FS.WRITEFILE IN LAST HOMEWORK?  fs.writeFileSync("./output/README.MD", readMeText);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.


//HOW DO WE TEST OUT EACH CLASS AND VERIFY IT GENERATES AN OBJECT WITH THE CORRECT
//STRUCTURE AND METHODS?

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```