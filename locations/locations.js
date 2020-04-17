import locations from '../data/data.js';
import makeListItemLink from './make-list-item-link.js'
import { getUser } from '../data/api.js';
import findById from '../common/find-by-id.js';

let hPSpan = document.getElementById('hp')
let moneySpan = document.getElementById('money');
const locationNav = document.getElementById('location-place');

// grabbing user from local storage
loadProfile();

