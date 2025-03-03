let todoList = [];

while (true) {
    let userInput = prompt("Please enter your request: ");

    // Handle cancel or empty input
    if (userInput === null) {
        console.log("Exiting the To-Do app.....");
        break;
    }

    let req = userInput.toLowerCase();

    switch (req) {
        case "add":
            let newTask = prompt("Please enter the task: ");

            if (newTask.trim() != "") {
                todoList.push(newTask);
                console.log(`${newTask} added successfully.`);
            }
            else {
                console.log("Task cannot be empty");
            }
            break;

        case "delete":
            let taskIndex = parseInt(prompt("Enter the index of the task you want to delete."));
            if (isNaN(taskIndex) || taskIndex < 1 || taskIndex > todoList.length) {
                console.log("Please enter a valid Index!");
            }
            else {
                todoList.splice(taskIndex-1, 1);
                console.log(`Task ${taskIndex} deleted successfully.`);
            }
            break;

        case "list":
            console.log("____________________");

            if (todoList.length == 0) {
                console.log("To-Do list is empty.")
            }
            else {
                for (let i = 0; i < todoList.length; i++) {
                    console.log(`${i+1}: ${todoList[i]}`);
                }
            }
            console.log("____________________")
            break;

        case "exit":
            console.log("Exiting the To-Do app.....");
            // Use break to exit the loop
            break;

        default:
            console.log("Invalid request!");
    }

    // Add this condition to exit the loop when the user chooses "exit"
    if (req === "exit") {
        break;
    }
}