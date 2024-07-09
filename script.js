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
const bars = document.querySelector('.fa-bars')
const listBars = document.querySelector('.list-links-invisible')
const menuLinks = document.querySelector('#menuLinks')
const xmarkBtn = document.querySelector('.fa-xmark')

bars.addEventListener('click', () => {
    menuLinks.classList.replace('list-links-invisible', 'list-links-visible')
    xmarkBtn.classList.remove('display-none')
    bars.classList.add('display-none')
})

xmarkBtn.addEventListener('click', () => {
    menuLinks.classList.replace('list-links-visible', 'list-links-invisible')
    xmarkBtn.classList.add('display-none')
    bars.classList.remove('display-none')
})