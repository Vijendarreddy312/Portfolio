// menu 
var menuIcon = document.querySelector(".fa-bars");
var navlist =  document.querySelector(".nav-list-items");
function menu(){
    if(menuIcon.classList.contains('fa-bars')){
        menuIcon.classList.replace('fa-bars','fa-xmark')
        navlist.style.display = "block";
    }
    else{
        menuIcon.classList.replace('fa-xmark','fa-bars')
        navlist.style.display = "none";
    }
}
function cv(){
    location.href="./assets/KVR789.pdf"
}
function contact(){
    location.href="#contact"
}
function projects(){
    location.href="#my-work"
}
function p1(){
    location.href="https://vijendarreddy312.github.io/Search-Image-Engine-/"
}
function p2(){
    location.href="https://vijendarreddy312.github.io/Calculator/"
}
function p3(){
    location.href="https://vijendarreddy312.github.io/Digital-Clock/"
}
function p4(){
    location.href="https://vijendarreddy312.github.io/QR-Code-Genarator/"
}
function p5(){
    location.href=""
}
