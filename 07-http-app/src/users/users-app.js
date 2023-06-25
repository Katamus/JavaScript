import usersStrore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async(element)=>{
    element.innerHTML = 'Loading...';
    await usersStrore.loadNextPage()

    console.log(usersStrore.getCurrentPage(),usersStrore.getUser());
}