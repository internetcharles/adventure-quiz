import locations from '../data/data.js';
import makeListItemLink from './make-list-item-link.js'
import { getUser } from '../data/api.js';

const hPSpan = document.getElementById('hp')
const moneySpan = document.getElementById('money');
const locationNav = document.getElementById('location-place');

// grabbing user from local storage
const user = getUser();

hPSpan.textContent = user.HP
moneySpan = user.Gold

for (let i = 0; i < locations.length; i++) {
    const location = locations[i];
    const newLink = makeListItemLink(location);
    locationNav.appendChild(newLink);
}
