const levels = document.querySelectorAll('.main-text-list__item');
console.log(levels)

levels.forEach(level => {
	level.addEventListener("click", setLevel)
})

function setLevel(level) {
  document.getElementById("easy").classList.remove("main-text-list__item-active");
  document.getElementById("medium").classList.remove("main-text-list__item-active")
  document.getElementById("hard").classList.remove("main-text-list__item-active")
  level.target.classList.add("main-text-list__item-active")
}

const startGame = document.querySelector(".main-text-button");
startGame.addEventListener("click", selectedLevel)

  function selectedLevel () {
    const searchActive = document.querySelector(".main-text-list__item-active");

    let background = document.createElement('div');
      background.className = 'table'
      background.url = ('../img/Background.png')
      document.body.append(background)
      let searchHaeder = document.querySelector('.header');
      let searchMain = document.querySelector('.main');
      searchHaeder.classList.toggle('header-none')
      searchMain.classList.toggle('main-none')

    if (searchActive) {
      let level = null;
      let gameEasyMedium = document.createElement('div');
      let gameHard = document.createElement('div');
      switch (searchActive.id) {
        case "easy":
          level = 3;
          gameEasyMedium.className = 'table-easy-medium'
          document.body.lastChild.append(gameEasyMedium)
          break;
        case "medium":
          level = 6;
          gameEasyMedium.className = 'table-easy-medium'
          document.body.lastChild.append(gameEasyMedium);
          break;
        case "hard":
          level = 10;
          gameHard.className = 'table-hard'
          document.body.lastChild.append(gameHard)
      }

      function createCard() {
        let cardWithBug = document.createElement('div');
          cardWithBug.className = 'picture-level-bug'
        let card = document.createElement('div');
        card.className = 'picture-level'
        let cardFront = document.createElement('div');
        cardFront.className = 'picture-level-front'
        card.append(cardFront)
        let cardBack = document.createElement('div');
        cardBack.className = 'picture-level-back'
        card.append(cardBack)
        switch (searchActive.id) {
          case "easy":
          case "medium":
             document.querySelector('.table-easy-medium').append(card)
            break;
          case "hard":
             document.querySelector('.table-hard').append(card)
        }
        card.addEventListener('click', rotateCard)
      }
      for (let i=0; i<level; i++) {
  	createCard()
    }

        let gameOver = false;
          function rotateCard(e) {
            gameOver ? window.location.reload(): ''
            const arr = document.querySelectorAll('.picture-level');
            const randomElement = arr[Math.floor(Math.random() * arr.length)];
            if (e.target === randomElement) {
              randomElement.parentElement.classList.add('picture-level-bug')
            } else {
                e.target.parentElement.classList.add('rotate')
            }
            gameOver = true;
        }
    } else {
      alert('Please, set level')
      window.location.reload()
    }
  }
