/**
 * 
 * @param {Number} page 
 * @returns
 */
export const loadUser = async(page = 1 ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    console.log(url);
    const data = await res.json();

    console.log(data);
}