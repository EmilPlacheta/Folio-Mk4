const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const cardContainer = document.querySelector(".card-container");


//display overlay (nav) after clicking the hamburgr menu
openMenu.addEventListener('click', function() {
  overlay.classList.add('show-menu');
  cardContainer.classList.add('hide');
});


//clode overlay after clicking close btn
closeMenu.addEventListener('click', function() {
  overlay.classList.remove('show-menu');
})

