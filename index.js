const bodyElement = document.querySelector('body');
const changeBackground = document.querySelector('.news');
const changeText = document.querySelector('h1');
const addAtribut = document.querySelector('#zprava1');
const addImg = document.querySelector('#zprava3 img');


bodyElement.style.backgroundColor = "#e9e9e9";
changeBackground.style.backgroundColor = "white";
changeBackground.style.maxWidth = "40rem";
changeText.classList.add ('news__title');
changeText.textContent = "Aktuální novinky";

addAtribut.classList.add ('post--main');
addImg.src = "images/zprava3-novy.jpg";

