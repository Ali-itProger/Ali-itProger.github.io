const menuToggle = document.querySelector('#burger');
const mobileNavContainer = document.querySelector('#mobile__nav');
const mobileBody = document.querySelector('body');

menuToggle.onclick = function () {
   menuToggle.classList.toggle('burger__active');
   mobileNavContainer.classList.toggle('mobile__active');
   mobileBody.classList.toggle('look');
}