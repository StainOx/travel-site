import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu.js'
import RevealonScroll from './modules/RevealonScroll.js'
import StickyHeader from './modules/stickyHeader.js'

new StickyHeader()
new RevealonScroll(document.querySelectorAll(".feature-item"), 75);
new RevealonScroll(document.querySelectorAll(".testimonial"), 60);
let modal
new MobileMenu();

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}





