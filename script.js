document.addEventListener('DOMContentLoaded', function() {

    var todosArray = [];

    // Target the form where input will be captured
    var theCaptureForm = document.getElementById('submit-form');


    // When the form is submitted, then execute the instructions
    theCaptureForm.addEventListener('submit', function(event) {

        // Prevent the page from reloading
        event.preventDefault();

        // Target the new todo input field
        var newTodoField = document.getElementById('new-todo-input');
        
        // Store the value of the input field
        var newTodo = newTodoField.value;

        // Add the new todo to the todos array
        todosArray.push(newTodo);

        // Clear out the existing todos
        document.getElementById('list-of-todos').innerHTML = "";
        
        //Loop over the todos array
        for(var i = 0; i < todosArray.length; i++) {
            createListItem(todosArray[i]);
        }
        
    })

    function createListItem(todoText) {
        // Create a new list item element
        var newListItem = document.createElement('li');

        newListItem.innerText = todoText;

        var listOfTodos = document.getElementById('list-of-todos');

        listOfTodos.appendChild(newListItem);
    }
})
