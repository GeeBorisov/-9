const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const menuNav = document.querySelector ('.mobile__nav-wrapper');

navBtn.onclick = function(){
    menuNav.classList.toggle('mobile__nav-wrapper--active');
    menuIcon.classList.toggle('menu-icon-active');
}
    
