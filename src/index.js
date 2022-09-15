import pageLoad from './pageLoad.js';
import showContact from './showContact.js';
import showMenu from './showMenu.js';
import showOverview from './showOverview.js';
import './style.css';

pageLoad();
showOverview();

const overviewTab = document.querySelector('#overview');
overviewTab.addEventListener("click", showOverview);

const menuTab = document.querySelector('#menu');
menuTab.addEventListener("click", showMenu);

const contactTab = document.querySelector('#contact');
contactTab.addEventListener("click", showContact);

console.log("Hello");