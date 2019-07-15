const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');


//display overlay (nav) after clicking the hamburgr menu
openMenu.addEventListener('click', function() {
  overlay.classList.add('show-menu');
});


//stop displaying overlay after clicking close btn
closeMenu.addEventListener('click', function() {
  overlay.classList.remove('show-menu');
})

