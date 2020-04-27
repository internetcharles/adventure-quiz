//function stringifies data and adds to local storage
export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

//function checks for user data, if nothing returns null
export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}