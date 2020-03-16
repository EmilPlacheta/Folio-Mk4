//nvigation
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const cardContainer = document.querySelector('.card-container');

//work/portfolio tiles
const drumkit = document.getElementById('drumkit');
const mixer = document.getElementById('mixer');
const radiant = document.getElementById('radiant');
const brewhound = document.getElementById('brewhound');

//work/portfolio paragraphs

const workIntro = document.getElementById('work-intro');
const drukmitPara = document.getElementById('drumkit-para');
const mixerPara = document.getElementById('mixer-para');
const radiantPara = document.getElementById('radiant-para');
const brewhoundPara = document.getElementById('brewhound-para');

//display overlay (nav) after clicking the hamburger menu
openMenu.addEventListener('click', function() {
  overlay.classList.add('show-menu');
  cardContainer.classList.add('hide');
});

//close overlay after clicking close btn
closeMenu.addEventListener('click', function() {
  overlay.classList.remove('show-menu');
});

//display project description when hovering over the card tile, but only on large screens

if (screen.width > 700) {
  //drumkit
  drumkit.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    drukmitPara.classList.remove('hide');
  });

  drumkit.addEventListener('mouseleave', () => {
    drukmitPara.classList.add('hide');
  });

  //mixer
  mixer.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    mixerPara.classList.remove('hide');
  });

  mixer.addEventListener('mouseleave', () => {
    mixerPara.classList.add('hide');
  });

  //brewhound
  brewhound.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    brewhoundPara.classList.remove('hide');
  });

  brewhound.addEventListener('mouseleave', () => {
    brewhoundPara.classList.add('hide');
  });

  //radiant

  radiant.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    radiantPara.classList.remove('hide');
  });

  radiant.addEventListener('mouseleave', () => {
    radiantPara.classList.add('hide');
  });
}
