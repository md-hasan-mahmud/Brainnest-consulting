

// import "../scripts/contactus.js"
import "../styles/contactus.css"
import "../styles/style.css"
import "../responsive-css/responsive-contact-us.css"
import "../responsive-css/responsive.css"

// ********************
//  * All Dom refarance
// ********************
// header area dom refarance
const header = document.querySelector('.header-area')
const iconBars = document.getElementById('bars')
const iconXmark = document.getElementById('xmark')
const iconGroup = document.getElementById('icon-group')
const topSecondHeader = document.getElementById('top-second-header')
const navlinks = document.querySelectorAll('.link')
// Number area dom refarance
const numberGroup = document.getElementById('number-content')


// header link click event
navlinks.forEach((link)=> {
   link.addEventListener('click',function() {
      navlinks.forEach(lnk=> lnk.classList.remove('active'))
      this.classList.add('active')
   })
})

window.onload = function() {
   numberGroup.classList.add('numshow')
   iconGroup.classList.add('icon-right-to-left-slide')
   topSecondHeader.classList.add('top-second-header-bottom-to-top-slide')
}

// when window scroll navbar will be sticky
window.addEventListener('scroll',function() {
   if(window.scrollY) {
    document.body.classList.add('sticky')
   }else {
    document.body.classList.remove('sticky')
   }


   //  number group animation
    const numberGroup = document.getElementById('number-content')
    const contentPosition = numberGroup.getBoundingClientRect().top*1.5;
    const screenPosition = this.window.innerHeight;
    if(contentPosition<screenPosition) {
       numberGroup.classList.add('numshow')
    }else {
       numberGroup.classList.remove('numshow')
    }
 
 
 
    // who we are animation
    const whoWeare = document.querySelector('.who-we-are')
    const verticalPosition = whoWeare.getBoundingClientRect().top*1.5;
    const verscreenPosition = this.window.innerHeight;
    if(verticalPosition<verscreenPosition) {
       whoWeare.classList.add('translateX')
    }else {
       whoWeare.classList.remove('translateX')
    }
 
    // About us content animation
    const aboutUscontent = document.querySelector('.about-us-content')
    const horicontentPosition = aboutUscontent.getBoundingClientRect().top*1.5;
    const horiscreenPosition = this.window.innerHeight;
    if(horicontentPosition<horiscreenPosition) {
      aboutUscontent.classList.add('content-translateX')
    }else {
      aboutUscontent.classList.remove('content-translateX')
    }


   //  Top horizantal line animation
   const topHorizantalLine = document.querySelector('.top-horizantal-line')
   const aboutcontent = topHorizantalLine.getBoundingClientRect().top*1.5;
   const aboutscreen = this.window.innerHeight;
   if(aboutcontent<aboutscreen) {
      topHorizantalLine.classList.add('top-horizantal-line-translateX')
   }else {
      topHorizantalLine.classList.remove('top-horizantal-line-translateX')
   }

   // brainnest-paragraph before animation
   const brainnestAnimation =document.querySelector('.brainnest-paregraph')
   const varticalPosition= brainnestAnimation.getBoundingClientRect().top*1.5;
   const varscrollPosition = this.window.innerHeight;
   if(varticalPosition<varscrollPosition) {
      brainnestAnimation.classList.add('brainnest-paregraph-translateY')
   }else { 
      brainnestAnimation.classList.remove('brainnest-paregraph-translateY')
   }

   // Bottom horizantal line animation
   const bottomHorizantalLine = document.querySelector('.bottom-horizantal-line')
   const horizanLine4Position = bottomHorizantalLine.getBoundingClientRect().top*1.5;
   const horizan4screenPosition = this.window.innerHeight;
   if(horizanLine4Position<horizan4screenPosition) {
      bottomHorizantalLine.classList.add('bottom-horizantal-translateX')
   }else {
      bottomHorizantalLine.classList.remove('bottom-horizantal-translateX')
   }

  

   // our mission section animation 
   const ourMission = document.querySelector('.our-mission')
   const ourPosition = ourMission.getBoundingClientRect().top*1.5;
   const ourScreenPosition = window.innerHeight;
   if(ourPosition<ourScreenPosition) {
      ourMission.classList.add('our-mission-translateX')
   }else {
      ourMission.classList.remove('our-mission-translateX')
   }

   // form-tackline section scroll animation
   const formTackling = document.querySelector('.form-tackline')
   const formTacPosition = formTackling.getBoundingClientRect().top*1.5;
   const formTacScreenPosition = window.innerHeight;
   if(formTacPosition<formTacScreenPosition) {
      formTackling.classList.add('form-tackline-translateY')
   }else {
      formTackling.classList.remove('form-tackline-translateY')
   }

   // commitment section animation 
   const commitmentContent = document.getElementById('translate-y')
   const commitPosition = commitmentContent.getBoundingClientRect().top*1.5;
   const commitScreenPosition = window.innerHeight;
   if(commitPosition<commitScreenPosition) {
      commitmentContent.classList.add('translateY')
   }else {
      commitmentContent.classList.remove('translateY')
   }

   // top line animation 
   const topLine = document.getElementById('top-line')
   const topPosition = topLine.getBoundingClientRect().top*1.5;
   const topscreenPosition = window.innerHeight;
   if(topPosition<topscreenPosition) {
      topLine.classList.add('top-line-slide')
   }else {
      topLine.classList.remove('top-line-slide')
   }

   // what we offer animation
   const whatWe = document.getElementById('what-we')
   const whatPosition = whatWe.getBoundingClientRect().top*1.5;
   const whatScreenPosition = window.innerHeight;
   if(whatPosition<whatScreenPosition) {
      whatWe.classList.add('what-we-opacity')
   }else {
      whatWe.classList.remove('what-we-opacity')
   }

   // bottom line animation 
   const bottomLine = document.getElementById('bottom-line')
   const bottomPosition = bottomLine.getBoundingClientRect().top*1.5;
   const bottomScreenPosition = window.innerHeight;
   if(bottomPosition<bottomScreenPosition) {
      bottomLine.classList.add('bottom-line-slide')
   }else {
      bottomLine.classList.remove('bottom-line-slide')
   }

   // card group card section animation
   const cards = document.querySelectorAll(".box")
   cards.forEach((card)=> {
      const cardPositoin = card.getBoundingClientRect().bottom*3;
      const cardScreenPosition = window.innerHeight;
      if(cardPositoin<cardScreenPosition) {
        card.classList.add('opacity-none')
      }else {
         card.classList.remove('opacity-none')
      }
   })
   
   // buisness section animation 
   const buisnessSection = document.getElementById('business')
   const buisnessPosition = buisnessSection.getBoundingClientRect().top*1.5;
   const buisnessScreenPosition = window.innerHeight;
   if(buisnessPosition<buisnessScreenPosition) {
      buisnessSection.classList.add('business-translateX')
   }else {
      buisnessSection.classList.remove('business-translateX')
   }

   // trusted animation
   const trusted = document.getElementById('tursted')
   const trustedPosition = trusted.getBoundingClientRect().top*1.5;
   const turstedScreenPosition = window.innerHeight;
   if(trustedPosition<turstedScreenPosition) {
      trusted.classList.add('trusted-left-to-right-slide')
   }else {
      trusted.classList.remove('trusted-left-to-right-slide')
   }

   // divager animation 
   const divager = document.querySelector('.divager')
   const divagerPosition = divager.getBoundingClientRect().top;
   const divagerScreenPositon = window.innerHeight;
   if(divagerPosition<divagerScreenPositon) {
      divager.classList.add('divager-bottom-top-slide')
   }else {
      divager.classList.remove('divager-bottom-top-slide')
   }

   // img-group animation
   const imgGroup = document.getElementById('img-group')
   const imgPosition = imgGroup.getBoundingClientRect().top*1.5;
   const imgScreenPosition = window.innerHeight;
   if(imgPosition<imgScreenPosition) {
      imgGroup.classList.add('img-group-zoom-in')
   }else {
      imgGroup.classList.remove('img-group-zoom-in')
   }
})


// icon bars click event
iconBars.addEventListener('click',function() {
header.classList.toggle('active')

// icon xmark click event
})
iconXmark.addEventListener('click',function() {
header.classList.remove('active')
   
})



