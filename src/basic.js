export default class Basic {
    constructor() {
        this.colors = ['#00F7FF', '#FFFF00', '#FF0054'];
        this.elements = {
            backgroundContainer: '.background-container',
            backgroundContainerUp: '.up',
            backgroundContainerRight: '.right',
            backgroundContainerDown: '.down',
            backgroundContainerLeft: '.left',

            hamburgerIcon: '.hamburger-icon',
            hamburgerMenu: '.hamburger-menu',
            hamburgerIconContainer: '.hamburger-icon-container',
            hamburgerSearch: '.hamburger-search',

            navIcon: '.nav-icon',
            searchMenu: '.search-menu',
            searchMenuClose: '.search-menu-close',
            searchMenuCloseContainer: '.search-menu-close-container',
            searchInput: '.search-input',

            mainContainer: '.main-container'
        };
    }

    getRandomColor() {
        const randomNumber = Math.floor(Math.random() * 3);
        return this.colors[randomNumber];
    };

    getRandomImage() {
        const randomNumber = Math.floor(Math.random() * 6);
        return `url(../src/assets/img/bg${randomNumber}.jpg)`;;
    };
}
