#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t Wellcome to tehreem fatima - Todo-List-Application\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "view Todo-List", "Exit"],
            }
        ]);
        if (option.choices === "Add Task") {
            await addTask();
        }
        else if (option.choices === "Delete Task") {
            await deleteTask();
        }
        else if (option.choices === "Update Task") {
            await updateTask();
        }
        else if (option.choices === "view Todo-List") {
            await viewTask();
        }
        else if (option.choices === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: " input",
            message: "Enter your New task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} Task added  successfully in Todo-List`);
};
let viewTask = () => {
    console.log("\n Your  Todo-List : \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: " number",
            message: "Enter the 'index no.' of the task you want to delete :",
        }
    ]);
    let deleteTask = todoList.splice(taskindex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been delete successfully from your Todo-List\n `);
};
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: " number",
            message: "Enter the 'index no.' of the task you want to update :",
        },
        {
            name: "new_task",
            type: " input",
            message: "Enter your New task name :"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updted list check view Todo-List]`);
};
main();
// async function createTodo(todos:string[]) {
//   do{
//     let answer = await inquirer.prompt(
//         {
//     }
//     );
//     if(answer.option === "Add"){
//         let addMore = await inquirer.prompt(
//             {
//                 type:"input",
//                 message:"Add task in the list",
//                 name:"addmoer",
//         }
//         );
//         todos.push(addMore.addmoer);
//         todos.forEach((addMore) => console.log(addMore));
//     }
//     if(answer.option === "Update"){
//         let UpdateMore = await inquirer.prompt(
//             {
//                 type:"list",
//                 message:"Update task in thee list",
//                 name:"todos",
//                 choices:todos.map((item) => (item))
//             }
//             );
//             let addMore=await inquirer.prompt(
//                 {
// type:"input",
// message:"Add item in the list",
// name:"todo",
//                 }
//                 );
//                 let newTask = todos.filter((val) => val !== UpdateMore.todos);
//                 todos = [...newTask,addMore.todo];
//     }
//     if(answer.option === "View"){
//         console.log("****TO DO LIST****");
//         console.log(todos);
//         console.log("***************");
//     }
//     if(answer.option === "Delete"){
//         let deletetask = await inquirer.prompt(
//             {
// type:"list",
// message:"Delete task from the list",
// name:"deletetask",
// choices:todos.map((item) =>(item))
//         }
//         );
//         let newTask = todos.filter((val) => val !== deletetask.deleteTask);
//         todos = [...newTask];
//         console.log(todos);
//     }
//   }while(true) 
// }
// createTodo(todos);
