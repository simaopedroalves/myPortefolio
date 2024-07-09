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
const xmarkBtn = document.querySelector('.xmark')

bars.addEventListener('click', () => {
    menuLinks.classList.replace('list-links-invisible', 'list-links-visible')
    xmarkBtn.style.display = 'flex'
    xmarkBtn.classList.add('fa-xmark')
    bars.style.display = 'none'
})

xmarkBtn.addEventListener('click', () => {
    menuLinks.classList.replace('list-links-visible', 'list-links-invisible')
    xmarkBtn.style.display = 'none'
    bars.style.display = 'flex'
})