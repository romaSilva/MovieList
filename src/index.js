import './css/style.css';
import Basic from './basic.js';
import Visual from './visualController.js';
import UI from './uiController.js';
import Omdb from './omdbController.js';

const basic = new Basic();
const visual = new Visual();
const ui = new UI();
const omdb = new Omdb();

const onLoad = e => {
    e.preventDefault();

    //generate a random color to be applied in the border
    const randomColor = basic.getRandomColor()

    //apply the random color to the ui
    visual.applyBorderColor(randomColor);

};

const hamburgerClicked = e => {
    e.preventDefault();

    //change classes on menu and icon
    visual.applyHamburgerClasses()
};

const searchClicked = e => {
    e.preventDefault();

    visual.applySearchClasses();
};

const searchCloseClicked = e => {
    e.preventDefault();

    visual.removeSearchClasses();
};



window.addEventListener('load', onLoad);

document.querySelector(basic.elements.hamburgerIconContainer).addEventListener('click', hamburgerClicked);

[basic.elements.navIcon, basic.elements.hamburgerSearch].forEach(current => document.querySelector(current).addEventListener('click', searchClicked));

document.querySelector(basic.elements.searchMenuCloseContainer).addEventListener('click', searchCloseClicked);
