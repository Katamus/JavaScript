import { createTodoHTML } from "./create-todo-html";

/**
 * 
 * @param {String} elementId 
 * @param {Array<Todo>} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    const element = document.querySelector(elementId);

    todos.forEach(todo =>{
        element.append(createTodoHTML(todo));
    });
}