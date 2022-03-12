import '@styles/main.scss'

const mainNav = document.querySelector('.main-nav')
const navToogle = document.querySelector('.main-nav__btn-toggle')

navToogle.addEventListener('click', e => {
    const visibility = mainNav.getAttribute('data-visible')

    if (visibility === 'false') {
        mainNav.setAttribute('data-visible', true)
        navToogle.setAttribute('aria-expanded', true)
    } else {
        mainNav.setAttribute('data-visible', false)
        navToogle.setAttribute('aria-expanded', false)
    }
})
