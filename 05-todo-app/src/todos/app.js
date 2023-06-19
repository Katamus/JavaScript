import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";


const ElementIds = {
    todoList : '.todo-list',
    newTodoIndes :`#new-todo-input`
}

export const App = (elementId) =>{

    const displayTodos = () =>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.todoList,todos);
    }

    // Cuando la funcion App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencia HTML
    const newDescriptionInput = document.querySelector(ElementIds.newTodoIndes);

    newDescriptionInput.addEventListener('keyup',(event)=>{
        if(event.keyCode !== 13 ) return;

        if(event.target.value.trim().length == 0 ) return;
        
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value= '';

    });


    

}