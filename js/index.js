// variables

var popOver = [document.querySelector(".pop-1"), document.querySelector(".pop-2")];
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
    popOver[0].classList.remove("popover-ceptera");
    popOver[0].classList.add("pop-1-translated");
    popOver[1].classList.remove("popover-g2");
    popOver[1].classList.add("pop-2-translated");
  } else {
    topNav.classList.remove("sticky");
    requestBtn.style.display = "none";
    popOver[0].classList.remove("pop-1-translated");
    popOver[0].classList.add("popover-ceptera");
    popOver[1].classList.remove("pop-2-translated");
    popOver[1].classList.add("popover-g2");
  }
}

//modal JS

function modalShow() {
  demoModal.style.display = "block";
}

function modalHide() {
  demoModal.style.display = "none";
}

window.onclick = function(event) {
  if ((event.target == demoModal) || (event.target == vModal)) {
    demoModal.style.display = "none";
    vModal.style.display = "none";
  }
}

function vmodalShow() {
  vModal.style.display = "block";
}

function vmodalHide() {
  vModal.style.display = "none";
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

//popovers JS

function popoverActive1() {
  popOver[0].style.display = ((popOver[0].style.display != "block") ? "block" : "none")
  popOver[1].style.display = ((popOver[1].style.display != "none") ? "none" : "none")
}

function popoverActive2() {
  popOver[0].style.display = ((popOver[0].style.display != "none") ? "none" : "none")
  popOver[1].style.display = ((popOver[1].style.display != "block") ? "block" : "none")
}