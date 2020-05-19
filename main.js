//nvigation
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const cardContainer = document.querySelector('.card-container');

//work/portfolio tiles
const drumkit = document.getElementById('drumkit');
const mixer = document.getElementById('mixer');
const radiant = document.getElementById('radiant');
const propertier = document.getElementById('propertier');
const twickenham = document.getElementById('twickenham');
const ladiva = document.getElementById('ladiva');
const guf = document.getElementById('guf');
const portfolio = document.getElementById('portfolio');

//work/portfolio paragraphs

const workIntro = document.getElementById('work-intro');
const drukmitPara = document.getElementById('drumkit-para');
const mixerPara = document.getElementById('mixer-para');
const radiantPara = document.getElementById('radiant-para');
const propertierPara = document.getElementById('propertier-para');
const twickenhamPara = document.getElementById('twickenham-para');
const ladivaPara = document.getElementById('ladiva-para');
const gufPara = document.getElementById('guf-para');
const portfolioPara = document.getElementById('portfolio-para');

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
    drukmitPara.classList.remove('hide');
    workIntro.classList.add('hide');
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

  //twickenham
  twickenham.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    twickenhamPara.classList.remove('hide');
  });

  twickenham.addEventListener('mouseleave', () => {
    twickenhamPara.classList.add('hide');
  });

  //radiant
  radiant.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    radiantPara.classList.remove('hide');
  });

  radiant.addEventListener('mouseleave', () => {
    radiantPara.classList.add('hide');
  });

  //ladiva
  ladiva.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    ladivaPara.classList.remove('hide');
  });

  ladiva.addEventListener('mouseleave', () => {
    ladivaPara.classList.add('hide');
  });

  //GUF
  guf.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    gufPara.classList.remove('hide');
  });

  guf.addEventListener('mouseleave', () => {
    gufPara.classList.add('hide');
  });

  //propertier
  propertier.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    propertierPara.classList.remove('hide');
  });

  propertier.addEventListener('mouseleave', () => {
    propertierPara.classList.add('hide');
  });

  //portfolio
  portfolio.addEventListener('mouseenter', () => {
    workIntro.classList.add('hide');
    portfolioPara.classList.remove('hide');
  });

  portfolio.addEventListener('mouseleave', () => {
    portfolioPara.classList.add('hide');
  });
}
