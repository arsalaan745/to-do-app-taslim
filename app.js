let todoList = [];

while (true) {

    req = prompt("Please enter your request: ").toLowerCase();

    if (req == "add") {
        let newTask = prompt("Please enter your task: ");
        if (newTask.trim() != "") {
            todoList.push(newTask);
            alert(`${newTask} added successfully!`);
        }
        else {
            alert("Task cannot be empty!");
        }
    }
    

    else if (req == "list") {
        if (todoList.length == 0) {
            alert("There is nothing to list!");
        }
        else {
          for (let i = 0; i < todoList.length; i++) {
            alert(`${i + 1}: ${todoList[i]}`);
          } 
        }
    }


    else if (req == "delete") {
        let index = parseInt(prompt("Enter the index of the task you want to delete: "));
        if (isNaN(index) || index < 1 || index > todoList.length) {
            alert("Invalid index!");
        }
        else {
            todoList.splice(index -1, 1)
            alert(`Task ${index} deleted successfully!`);
        }
    }


    else if (req == "quit") {
        alert("Quitting the to-do app...");
        break;
    }


    else {
        alert("Invalid request! Please try again.");
    }

}