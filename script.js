const levels = document.querySelector(".main-text-list");
console.log(levels)
levels.addEventListener('click', event => console.log(event))


/*levels.forEach(level => {
	level.addEventListener("click", setLevel)
})

function setLevel(level) {
  levels = +e.target.getAttribute("data-value")
  document.getElementById("easy").classList.remove("main-text-list__item-active");
  document.getElementById("medium").classList.remove("main-text-list__item-active")
  document.getElementById("hard").classList.remove("main-text-list__item-active")
  level.target.classList.add("main-text-list__item-active")
}


const startGame = document.querySelector(".main-text-button").onClick () => createElement('.body');
console.log(startGame)
startGame.addEventListener("click", selectedLevel)

let background = document.createElement('div');
  background.url = ('../img/Background.png')
  background.style.backgroundSize = '100%'
  background.style.backgroundPosition = 'cover'
  document.body.append(background)
  console.log(background)

function selectedLevel () {
  switch (levels) {
    case "id = easy":
    const cardsEasy = document.createElement('div');
    cardsEasy.url = ('../img/Карта 1.png');
    document.body.append(background);
      break;
    case "id = medium":
    const cardsMedium = document.createElement('div');
    cardsEasy.url = ('../img/Карта 1.png');
    document.body.append(background);
      break;
    case "id = hard":
    const cardsHard = document.createElement('div');
    cardsEasy.url = ('../img/Карта 1.png');
    document.body.append(background);
    default: ('');
  }
}*/
