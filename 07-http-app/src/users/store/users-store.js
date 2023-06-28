import { User } from "../models/user";
import { renderTable } from "../presentation/render-table/render-table";
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
    if(state.currentPage <= 1) return;

    state.currentPage -=1;
    const user = await loadUser(state.currentPage);
    state.users = user;
}

/**
 * 
 * @param {updateUser} user 
 */
const onUserChanged = async(updateUser)=>{

    let wasFound = false;

    state.users = state.users.map(data => {
        if(data.id === updateUser.id){
            wasFound = true;
            return  updateUser;
        }else {
            return data;
        }
    })

    if(state.users.length < 10 && !wasFound) {
        state.users.push(updateUser);
    }
    
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