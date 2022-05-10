var popOver = [document.querySelector(".popover-ceptera"), document.querySelector(".popover-g2")];
var topNav = document.querySelector(".top-navbar");
var requestBtn = document.querySelector(".request-btn");
var beeImg = document.querySelector(".select-img");
var featureBoxToggle = document.querySelector(".features-boxes-toggle");
var featureHide = document.querySelector(".toggle-features-hide");
var demoModal = document.querySelector(".demo-modal");
var vModal = document.querySelector("#video-modal");

// sticky nav JS

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.documentElement.scrollTop > 50) {
    topNav.classList.add("sticky");
    requestBtn.style.display = "inline-block";
    beeImg.classList.remove("beeimage");
    beeImg.classList.add("beeimage-translated");
   } else {
    topNav.classList.remove("sticky");
    requestBtn.style.display = "none";
    beeImg.classList.remove("beeimage-translated");
    beeImg.classList.add("beeimage");
   }
 }

// tabs-section JS

function myFunction(evt) {
  document.getElementById("salesIncrease").style.display = "flex";
  evt.currentTarget.className += " active";
}

window.onload = myFunction();

function openTab(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
};

//features JS

function featuresShow() {
  featureBoxToggle.style.display = "flex";
  document.querySelector(".toggle-features").style.display = "none";
  featureHide.style.display = "block";
}

function featuresHide() {
  featureBoxToggle.style.display = "none";
  featureHide.style.display = "none";
  document.querySelector(".toggle-features").style.display = "block";
  document.querySelector(".features-section").scrollIntoView(true);
}

//modal JS


function modalShow() {
  demoModal.style.display = "block";
}

function modalHide() {
  demoModal.style.display = "none";
}


window.onclick = function(event) {
  console.log(event.target);
  if (event.target == demoModal) {
    demoModal.style.display = "none";
  }
}

function vmodalShow() {
  vModal.style.display = "block";
}

function vmodalHide() {
  vModal.style.display = "none";
}

// document.addEventListener(
//   "click",
//   function(event) {
//     // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
//     if (
//       event.target.matches(".close") ||
//       !event.target.closest(".demo-modal-header")
//     ) {
//       modalHide()
//     }
//   },
//   false
// )

//popovers JS

function popoverActive1() {
  popOver[0].style.opacity = ((popOver[0].style.opacity != "1") ? "1" : "0")
  popOver[1].style.opacity = ((popOver[1].style.opacity != "0") ? "0" : "0")
  // document.querySelector(".popover-g2").style.opacity = ((document.querySelector(".popover-g2").style.opacity != "1") ? "1" : "0")
}

function popoverActive2() {
  // alert(document.querySelector(".popover-g2"));
  popOver[0].style.opacity = ((popOver[0].style.opacity != "0") ? "0" : "0")
  popOver[1].style.opacity = ((popOver[1].style.opacity != "1") ? "1" : "0")
}