//Nav Change

let scrollpos = window.scrollY
const nav = document.querySelector(".nav-bar")
const welcomeHeader = document.querySelector("#welcome-button")
const wh_height = welcomeHeader.offsetHeight


const addScrollH = () => nav.classList.add("nav-scroll")
const removeScrollH= () => nav.classList.remove("nav-scroll")

const navLogo = document.querySelector(".nav-logo")
const addScrollL = () => navLogo.classList.add("nav-logo-scroll")
const removeScrollL= () => navLogo.classList.remove("nav-logo-scroll")
window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= wh_height) {
    addScrollH()
    addScrollL()
      
}
  else {
    removeScrollH()
    removeScrollL()
  }
});

//Nav position

window.onload = function() {
  navLine();
  navLine2();

    
  document.querySelector("#welcome-header").classList.add("welcome-header-initial")
    
    
    setTimeout(function() {
        document.querySelector("#welcome-button").classList.add("welcome-button-initial")
}, (300)); //40 second

    
};


function navLine() {
    let nWelcome = document.getElementById("navLine1");
  
    
    const welcomeSection = document.querySelector(".welcome-section")
    const wSec_height = welcomeSection.offsetHeight
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll <= wSec_height - 10) {
           nWelcome.classList.add("nav-line-pos");
        } else {
            nWelcome.classList.remove("nav-line-pos");
        }
    });
      
 
}

function navLine2() {
    const productSection = document.querySelector("#product-section")
    const p2Sec_height = productSection.offsetHeight
    let nProduct = document.getElementById("navLine3");

    
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= p2Sec_height) {
           nProduct.classList.add("nav-line-pos");
        } else {
            nProduct.classList.remove("nav-line-pos");
        }
    });

 
}

//Nav scroll to

$("#top").click(function() {
    $('html,body').animate({
        scrollTop: $(".welcome-section").offset().top},
        'slow');
});




$("#key-benefits-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#service-section").offset().top},
        'slow');
});

$("#brandpartner-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#bank-partners-section").offset().top},
        'slow');
});

//Discover Button

$("#welcome-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#product-section").offset().top},
        'slow');
});





    