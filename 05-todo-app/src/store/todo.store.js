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

export default {
    initStore
}
