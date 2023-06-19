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

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) => {
    throw new Error('Not implemented');
}


const deleteCompleted = () => {
    throw new Error('Not implemented');
}

const setFilter = (newFilter = Filter.All) => {
    throw new Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId 
 */
export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
}
