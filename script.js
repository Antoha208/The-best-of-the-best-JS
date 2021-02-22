const levels = document.querySelectorAll(".main-text-list__item");
console.log(levels)

/*levels.forEach(level => {
	level.addEventListener("click", event => console.log(event))
})*/

/*
const searchActive = levels.addEventListener('click', event => document.querySelectorAll(".main-text-list__item-active"));
console.log(searchActive)
*/

levels.forEach(level => {
	level.addEventListener("click", setLevel)
})

function setLevel(level) {
  document.getElementById("easy").classList.remove("main-text-list__item-active");
  document.getElementById("medium").classList.remove("main-text-list__item-active")
  document.getElementById("hard").classList.remove("main-text-list__item-active")
  level.target.classList.add("main-text-list__item-active")
}
/*console.log(setLevel)*/



const startGame = document.querySelector(".main-text-button");
/*console.log(startGame)*/
startGame.addEventListener("click", selectedLevel)

let background = document.createElement('div');
  background.className = 'table'
  background.url = ('../img/Background.png')
  background.style.backgroundPosition = 'cover'
  document.body.append(background)
  /*console.log(background)*/

function selectedLevel () {
  const searchActive = document.querySelector(".main-text-list__item-active");
  console.log(searchActive)
  searchActive.event.target.id = 'easy'
  console.log(searchActive)
  switch (event.target.id) {
    case event.target.id === "easy":
    const cardsEasy = document.createElement('div');
    cardsEasy.url = ('../img/Карта 1.png');
    document.body.append(cardsEasy);
      break;
    case event.target.id === "medium":
    const cardsMedium = document.createElement('div');
    cardsMedium.url = ('../img/Карта 1.png');
    document.body.append(cardsMedium);
      break;
    case event.target.id ==="hard":
    const cardsHard = document.createElement('div');
    cardsHard.url = ('../img/Карта 1.png');
    document.body.append(cardsHard);
    default: ('');
  }
}
/*console.log(selectedLevel)*/




function createCard() {
const card = createElement('div');
card.className = 'picture-level'
document.querySelector('.table').append('card')
card.addEventListener('click', rotateCard)
}

function rotateCard(side) {
  side.classList.add('rotate')
}
