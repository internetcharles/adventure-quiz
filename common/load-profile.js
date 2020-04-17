import { getUser } from '../data/api.js';

function loadProfile() {
    // get HP and GOLD
    const HP = document.getElementById('hp');
    const gold = document.getElementById('money');

    // set user state
    const user = getUser();

    // go back to homepage if user isn't detected
    if (!user) {
        window.location = './';
    }

    HP.textContent = user.HP;
    gold.textContent = user.gold;0

    // insert dead later0
}

export default loadProfile;