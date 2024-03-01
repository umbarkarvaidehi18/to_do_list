let tasks = []; // Empty array to store tasks

function addTask() {
    const taskInput = document.getElementById("new-task").value;

    if (taskInput !== "") {
        tasks.push(taskInput);

    
    
        document.getElementById("tasks-list").innerHTML= tasks.map(task => `<li>${task}</li> `).join(" ");

        
    

        // Clearing
        document.getElementById("new-task").value = "";
    }
}
function deleteTask(){
   tasks.pop();
   document.getElementById("tasks-list").innerHTML= tasks.map(task => `<li>${task}</li> `).join(" ");
   document.getElementById("new-task").value = "";

}
