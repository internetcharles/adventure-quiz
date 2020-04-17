import makeUser from './make-user.js'
import { saveUser } from './data/api.js';

const myForm = document.getElementById('user-form');
myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = new FormData(myForm);
    const user = makeUser(form);

    saveUser(user);
});