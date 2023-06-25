import { loadUser } from "../use-cases/load-users-by-page";

const state = {
    currentPage:0,
    users: [],
}

const loadNextPage = async()=>{
   const user = await loadUser(state.currentPage + 1);
   if(user.length === 0 ) return;

   state.currentPage +=1;
   state.users = user;
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
    /**
     * 
     * @returns {User[]}
     */
    getUser: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}