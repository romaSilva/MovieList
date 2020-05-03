import Basic from '/basic.js';

const basic = new Basic();


const ease = (t, b, c, d) => {
    return c*t/d + b;
};

export default class Visual {
    constructor() {
        
    }

    applyBorderColor = color => {
        document.querySelector(basic.elements.backgroundContainerUp).style.backgroundColor = color;
        document.querySelector(basic.elements.backgroundContainerRight).style.backgroundColor = color;
        document.querySelector(basic.elements.backgroundContainerDown).style.backgroundColor = color;
        document.querySelector(basic.elements.backgroundContainerLeft).style.backgroundColor = color;
    };

    applyBackgroundImage = url => {
        document.querySelector(basic.elements.backgroundContainer).style.backgroundImage = `${url}`;
    };

    applyHamburgerClasses = () => {
        document.querySelector(basic.elements.hamburgerMenu).classList.toggle('open');
        document.querySelector(basic.elements.hamburgerIconContainer).classList.toggle('open');
    };

    applySearchClasses = () => {
        document.querySelector(basic.elements.searchMenu).classList.remove('open');
        document.querySelector(basic.elements.searchMenu).classList.add('open');
        document.querySelector(basic.elements.searchInput).focus();
    };

    removeSearchClasses = () => {
        document.querySelector(basic.elements.searchMenu).classList.remove('open');
    };


}