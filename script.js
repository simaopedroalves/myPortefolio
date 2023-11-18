$(document).ready(function() {
    // $(".logo, .social-media, .apresentation").addClass('border');
//  $('.header').css("border", "solid, 3px green");
})

const gitHubBtn = document.getElementById('gitHub')

gitHubBtn.addEventListener('click', () => {
    gitHubBtn.style.color = 'var(--four)'

})

// const instagramBtn = document.getElementsByClassName('fa-instagram')

// instagramBtn.addEventListener('click', () => {

// })

// const linkedin = document.getElementsByClassName('fa-linkedin-in')

// linkedin.addEventListener('click', () => {
    
// })


// Action on Menu
const bars = document.getElementById('bars')
const listBars = document.querySelector('.list-links')
const menuLinks = document.querySelector('#menuLinks')
const xmarkBtn = document.querySelector('.x-xmark')

bars.addEventListener('click', () => {
    menuLinks.classList.replace('list-links', 'list-links-visible')
    bars.classList.replace('fa-bars', 'fa-xmark')
})

xmarkBtn.addEventListener('click', () => {
    menuLinks.classList.replace('list-links-visible', 'list-links')
    bars.classList.replace('fa-xmark', 'fa-bars')
})