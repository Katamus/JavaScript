import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";


const ElementIds = {
    todoList : '.todo-list'
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


    

}