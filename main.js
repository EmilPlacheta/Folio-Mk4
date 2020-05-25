//nvigation
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
//const cardContainer = document.querySelector('.card-container');

//my work page
const cards = document.querySelectorAll('.card');
const cardText = document.querySelectorAll('.card-text');

//display project description paragraph when hovering over the card tile
function handleHoverShow(e) {
  let cardId = e.target.dataset.id;

  cardText.forEach(p => {
    if (p.dataset.id === cardId) {
      p.classList.remove('hide');
    }
  });
}

function handleHoverHide(e) {
  let cardId = e.target.dataset.id;
  cardText.forEach(p => {
    if (p.dataset.id === cardId) {
      p.classList.add('hide');
    }
  });
}

//display overlay (nav) after clicking the hamburger menu
openMenu.addEventListener('click', function() {
  overlay.classList.add('show-menu');
  cardContainer.classList.add('hide');
});

//close overlay after clicking close btn
closeMenu.addEventListener('click', function() {
  overlay.classList.remove('show-menu');
});

//show paragraph
cards.forEach(card => {
  card.addEventListener('mouseenter', handleHoverShow);
});
//hide paragraph
cards.forEach(card => {
  card.addEventListener('mouseleave', handleHoverHide);
});
