let todo = {
    name: "Go to Najot Ta’lim",
    time: {
        hour: 12,
        minute: 30,
        second: 20
    }
};

let todos = [];
todos.push(todo);

localStorage.setItem("todos", JSON.stringify(todos));

function createObjectWithPrompt() {
    let obj = {};
    let propertyCount = parseInt(prompt("Enter the number of properties for the object:"));
  
    for (let i = 0; i < propertyCount; i++) {
      let propertyName = prompt("Enter the name of property " + (i + 1) + ":");
      let propertyValue = prompt("Enter the value of property " + (i + 1) + ":");
      obj[propertyName] = propertyValue;
    }
  
    return obj;
  }
  
  // Obyekt yaratish uchun funktsiyani chaqirish
  let createdObject = createObjectWithPrompt();
  console.log(createdObject);

function showTodos() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach(function (todo) {
        console.log("Name: " + todo.name);
        console.log("Time: " + todo.time.hour + ":" + todo.time.minute + ":" + todo.time.second);
    });
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let updatedTodos = todos.filter(function (todo) {
        return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

function sortTodo() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.sort(function (a, b) {
        let timeA = a.time.hour * 3600 + a.time.minute * 60 + a.time.second;
        let timeB = b.time.hour * 3600 + b.time.minute * 60 + b.time.second;
        return timeA - timeB;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}