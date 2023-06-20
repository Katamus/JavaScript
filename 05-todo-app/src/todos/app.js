import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos,renderPending } from "./use-cases";


const ElementIds = {
    todoList : '.todo-list',
    newTodoIndes :`#new-todo-input`,
    clearCompletedButton : `.clear-completed`,
    TodoFilters : `.filtro`,
    pendingCountLabel: '#pending-count'
}

export const App = (elementId) =>{

    const displayTodos = () =>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        console.log('asdasd',todoStore.getCurrentFilter());
        renderTodos(ElementIds.todoList,todos);
        updatePendingCount();
    }

    const updatePendingCount = () =>{
        renderPending(ElementIds.pendingCountLabel);
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
    const todoListUL = document.querySelector(ElementIds.todoList);
    const clearCompletedButton = document.querySelector(ElementIds.clearCompletedButton);
    const filtersLIs = document.querySelectorAll(ElementIds.TodoFilters);

    newDescriptionInput.addEventListener('keyup',(event)=>{
        if(event.keyCode !== 13 ) return;

        if(event.target.value.trim().length == 0 ) return;
        
        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value= '';

    });

    todoListUL.addEventListener('click',(event)=>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click',(event)=>{
        
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if(!isDestroyElement || !element) {
            return;
        }
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });


    clearCompletedButton.addEventListener('click',()=>{
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach((element) => {
        
        element.addEventListener('click',(element)=>{
            filtersLIs.forEach(el=> el.classList.remove('selected'));
            element.target.classList.add('selected');
            switch (element.target.text) {
                case 'Todos':
                        todoStore.setFilter(todoStore.Filter.All);
                break;
                case 'Pendientes':
                        todoStore.setFilter(todoStore.Filter.Pending);
                break;
                case 'Completados':
                        todoStore.setFilter(todoStore.Filter.Completed);  
                break;
            }
            displayTodos();
        });
    })

}