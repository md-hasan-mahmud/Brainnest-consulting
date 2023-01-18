
// Header dom rafarance

const header = document.querySelector('.header-area')
// icon dom refarance
const iconBars = document.getElementById('bars')
const iconXmark = document.getElementById('xmark')
// navlink



// form validation
// form dom refarance
const form = document.getElementById('form')
const Name = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const textArea = document.getElementById('commentbox')
const emailvalidIcon = document.getElementById('email-valid')
const emailinvalidIcon = document.getElementById('email-invalid')
const numberValidIcon = document.getElementById('number-valid')
const numberinValidIcon = document.getElementById('number-invalid')
const NameValidIcon = document.getElementById('name-valid')
const NameInvalidIcon = document.getElementById('name-invalid')

const textAreaValidIcon = document.getElementById('text-area-valid')
const textAreaInValidIcon = document.getElementById('text-area-invalid')

// regex code
const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
// const whiteSpaceRegex = /\s/g;
 const phoneNumberValidRegex = new RegExp(/^(?:\+88|88)?(01[3-9]\d{8})$/);

form.addEventListener('submit',function(e) {
      e.preventDefault();

    //   name/company input validation
    if(Name.value.length>0) {
        Name.classList.remove('invalid')
        Name.classList.add('valid')
        NameInvalidIcon.classList.remove('invalid-icon')
        NameValidIcon.classList.add('valid-icon')
    }else {
        Name.classList.remove('valid')
       Name.classList.add('invalid')
       NameValidIcon.classList.remove('valid-icon')   
       NameInvalidIcon.classList.add('invalid-icon')
    
    }

       //email input validation
        if(email.value.trim().match(regex)) {
            email.classList.remove('invalid')
            email.classList.add('valid')
            emailinvalidIcon.classList.remove('invalid-icon')
            emailvalidIcon.classList.add('valid-icon')
        }else {
            email.classList.remove('valid')
            email.classList.add('invalid')
            emailvalidIcon.classList.remove('valid-icon')
            emailinvalidIcon.classList.add('invalid-icon')
        }    

        // number input validation
        if(number.value.trim().match(phoneNumberValidRegex)) {
            number.classList.remove('invalid')
            number.classList.add('valid')
            numberinValidIcon.classList.remove('invalid-icon')
            numberValidIcon.classList.add('valid-icon')
        }else {
            number.classList.remove('valid')
            number.classList.add('invalid')
            numberValidIcon.classList.remove('valid-icon')
            numberinValidIcon.classList.add('invalid-icon')
        }

        // text area input validation
        if(textArea.value.length>0) {
            textArea.classList.remove('invalid')
            textArea.classList.add('valid')
            textAreaInValidIcon.classList.remove('invalid-icon')
            textAreaValidIcon.classList.add('valid-icon')
        }else {
            textArea.classList.remove('valid')
            textArea.classList.add('invalid')
            textAreaValidIcon.classList.remove('valid-icon')
            textAreaInValidIcon.classList.add('invalid-icon')
        }

})


// window scroll event
window.addEventListener('scroll',function() {
    if(window.scrollY) {
        document.body.classList.add('sticky')
       }else {
        document.body.classList.remove('sticky')
       }
})

Name.addEventListener('keydown',function() {
    if(Name.selectionStart===0 && window.event.code==="Space") {
        window.event.preventDefault();
        return;
    }
   
})

textArea.addEventListener('keydown',function() {
    
    if(textArea.selectionStart=== 0 && window.event.code==="Space") {
        window.event.preventDefault();
        return;
    }
   
})

email.addEventListener('keydown',function() {
    if(email.selectionStart === 0 && window.event.code =="Space") {
        window.event.preventDefault();
        return;
    }
   
})

number.addEventListener('keydown',function() {
    if(number.selectionStart=== 0 && window.event.code==="Space") {
        window.event.preventDefault();
        return;
    }
   
})


// icon bars click event
    iconBars.addEventListener('click',function() {
    header.classList.toggle('active')
})


// icon xmark click event
    iconXmark.addEventListener('click',function() {
    header.classList.remove('active')
        
})