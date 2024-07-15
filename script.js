// $(document).ready(function() {
//     // $(".logo, .social-media, .apresentation").addClass('border');
// //  $('.header').css("border", "solid, 3px green");
// })

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

// CLOSE MENU WHEN THE USER CLICKS EACH BUTTON
const allHrefsMenu = menuLinks.querySelectorAll('a');

allHrefsMenu.forEach(href => {
    href.addEventListener('click', () => {
        setTimeout(() => {
            closeMenu()
        }, 500);
    })
}); 

function closeMenu () {
    menuLinks.classList.replace('list-links-visible', 'list-links-invisible')
    xmarkBtn.style.display = 'none'
    bars.style.display = 'flex'
}
// form message

// CHECK IF NAME IS VALID
const userName = document.querySelector('#name');
const submitBtn = document.querySelector('.submit-button')
const errorMessageName = document.querySelector('.errorMessageName')
const invalidName = "Your name is invalid"

userName.addEventListener('input', () => {

    let regex = new RegExp (/^[a-z][a-z\s\ã\à\á\í\ó]+$/, "gi");
    let string = userName.value;

    if (!regex.test(string)) {
        errorMessageName.textContent = invalidName
    }

    else {
        errorMessageName.textContent = ''
    }
     checkAll()
})

// CHECK IF EMAIL IS VALID
const email = document.querySelector('#email')
const invalidEmail = "Your email is invalid"
const errorMessageEmail = document.querySelector('.errorMessageEmail')


email.addEventListener('input', () => {

    let regex = /^([0-9]|[a-z]|.|_)+\b@\b[a-z]{2,6}\.[a-z]{2,3}$/g
    let string = email.value;

    if (!regex.test(string)) {
        errorMessageEmail.textContent = invalidEmail
    }

    else {
        errorMessageEmail.textContent = ''
    }
    checkAll()
})

function checkAll () {
    let inputValues = document.querySelectorAll('.contactForm input')
    inputValues.forEach(input => {
        input.addEventListener('input', () => {
            if (errorMessageName.textContent == invalidName || errorMessageEmail.textContent == invalidEmail) {
                submitBtn.disabled = true
            }
            else {
                submitBtn.disabled = false
            }
        })
    })
   
}

//subject message when received

const newMessageSubject = document.querySelector('#newMessage')

function newMessage () {
    newMessageSubject.value = 'New message from ' + userName.value
}


// user click hover projects images 

const projectHorta = document.querySelector('.fig-horta-da-ria');

projectHorta.addEventListener('click', () => {
    window.opener('/projects/hortaDaRia-project.html')
})