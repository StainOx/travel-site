import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu.js'
import RevealonScroll from './modules/RevealonScroll.js'
import StickyHeader from './modules/stickyHeader.js'

let stickyHeader = new StickyHeader()
new RevealonScroll(document.querySelectorAll(".feature-item"), 75);
new RevealonScroll(document.querySelectorAll(".testimonial"), 60);

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}





