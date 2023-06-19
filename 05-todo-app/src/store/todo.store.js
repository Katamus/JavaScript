import { Todo } from "../todos/models/todo";

const Filter = {
    All:'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filter.All
}

const initStore = ()  => {
    console.log(state);
    console.log('InitSore palma');
}

const loadStore = () =>{
    throw new Error('Not implemented');
}

const getTodos = (filter = Filter.All) => {
    switch (filter) {
        case Filter.All:
            return [...state.todos];
        case Filter.Completed:
            return state.filter(todo => todo.done);
        case Filter.Pending:
            return state.filter(todo => !todo.done);
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
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
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
    getCurrentFilter
}
