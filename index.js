let navbar = document.querySelector(".navbar")
let burger = document.querySelector(".burger")
let navlist = document.querySelector(".nav-list")
let rightNav = document.querySelector(".rightNav")

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})