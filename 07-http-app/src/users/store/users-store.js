import { loadUser } from "../use-cases/load-users-by-page";

const state = {
    currentPage:0,
    users: [],
}

const loadNextPage = async()=>{
    await loadUser();
}

const loadPreviousPage = async()=>{
    throw new Error('No implementado');
}

const onUserChanged = async()=>{
    throw new Error('No implementado');
}

const reloadPage = async()=>{
    throw new Error('No implementado');
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}