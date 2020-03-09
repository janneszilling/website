let loadingPage = document.querySelector(".loading--page");

window.addEventListener("load", loading);

function loading(e) {
  loadingPage.className += " hidden";
}

let enableBodyScroll = function(){
  document.body.style.overflow = "scroll"
}

window.onload = function(){
  setTimeout(enableBodyScroll, 3500);
}

let handler = document.getElementById("handler");
let menu = document.getElementById("menu");


handler.onclick = function() {
  navMenu();
};

function navMenu() {
  if (menu.style.right === "-1536px") {
    menu.style.right = "0px";
    handler.style.transform = "rotate(-25deg)";
  } else {
    menu.style.right = "-1536px";
    handler.style.transform = "rotate(0deg)";
  }
}

let sMHandler = document.querySelector(".social--media--button");
let sMLink = document.querySelector(".sm--link");

sMHandler.onclick = function(){
    sMMenu();
}

function sMMenu() {
    if (sMLink.style.opacity === "0") {
        sMLink.style.opacity = "1";
        sMHandler.style.transform = "rotate(135deg)";
    } else {
        sMLink.style.opacity = "0";
        sMHandler.style.transform = "rotate(0deg)";
    }
}