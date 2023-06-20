import { Todo } from "../todos/models/todo";

export const Filter = {
    All:'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del realidad'),
    ],
    filter: Filter.All
}

const initStore = ()  => {
    loadStore();
    console.log('InitSore palma');
}

const loadStore = () =>{

    if(!localStorage.getItem('state')) return;

    const{todos = [],filter = Filter.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateTodoLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filter.All) => {
    switch (filter) {
        case Filter.All:
            return [...state.todos];
        case Filter.Completed:
            return state.todos.filter(todo => todo.done);
        case Filter.Pending:
            return state.todos.filter(todo => !todo.done);
        default :
            throw new Error(`Option ${ filter } is not valid.`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if(!description) throw new Error('Not implemented');

    state.todos.push(new Todo(description));

    saveStateTodoLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo =>{
        if(todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });

    saveStateTodoLocalStorage();

}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)

    saveStateTodoLocalStorage();
}


const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done)
}

/**
 * 
 * @param {Filter} newFilter 
 */
const setFilter = (newFilter = Filter.All) => {
    state.filter = newFilter;
    saveStateTodoLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

/**
 * 
 * @param {String} todoId 
 */
export default {
    addTodo,
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    Filter
}
