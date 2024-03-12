//import inquirer from inquirer laibrary;
import inquirer from "inquirer";

//creat a async function ;
async function askQuestions() {

//in this asyn function,make an array for the questions;
//in array i create four objects for questions and their details
    const questionArray = [{
        name:"name",
        type:"input",
        message:"what is your name?"
    },
    {
        name:"color",
        type:"list",
        message:"what is your favorite color?",
        choices:["Red","Blue","Yello","Black"]
    },
    {
            type: "confirm",
            message: "Are you enjoying learning TypeScript?",
            name: "enjoyLearning",
    },
    {
        name:"favorite_language",
        type:"list",
        message:"what is your favorite language?",
        choices:["Python","Typescript","Javascript","c++"]
    }
]
//creat a variable in which i use prompt function of inquirer for user input;
//in wich i pass my question array;
const Answers = await inquirer.prompt(questionArray)
console.log("Answers",Answers)
}
//at the end just call our async function
askQuestions()


