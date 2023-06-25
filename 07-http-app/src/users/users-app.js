import { renderTable } from "./presentation/render-table/render-table";
import usersStrore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element)=>{
    element.innerHTML = 'Loading...';
    await usersStrore.loadNextPage()
    element.innerHTML = '';
    renderTable(element);
}