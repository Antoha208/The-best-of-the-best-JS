const levels = document.querySelectorAll("li.main-text-list__item").forEach(level => {
	level.addEventListener("click", onClick)
})

function onClick(level) {
  document.getElementById("easy").classList.remove(".main-text-list__item-active");
  document.getElementById("medium").classList.remove(".main-text-list__item-active")
  document.getElementById("hard").classList.remove(".main-text-list__item-active")
  level.target.classList.add(".main-text-list__item-active")
}


/*let selection = selectLevel () => {
levels.forEach((levels) => (level, index, levels) {
  if (level.className === ('main-text-list__item')) {
    level.classList.add('main-text-list__item-active')
  } else {
    level.classList.remove('main-text-list__item-active')
  }
    });
}

function addClass () {
return levels.addEventListener('click', event => selection)
}
addClass()*/
