function playSound(a) { // узнать почему этот парметр содержит все все св-ва, если выводим clg, да и при использовании
  const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${a.keyCode}"]`);

  if (!audio) return; // останавливаем выполненеи функции, значение null не возвращается

  audio.currentTime = 0; // при нажатти перекидываем на начало https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement 
  audio.play();
  key.classList.add(`playing`);
}

window.addEventListener(`keydown`, playSound); // Почему не нужны скобки после функции

function removeTransition(a) {


  if (a.propertyName !== "transform") return;
  // console.log(a.propertyName);
  // console.log(this);
  this.classList.remove(`playing`);
};

const keys = document.querySelectorAll(`.key`);
console.log(keys);
keys.forEach(function (key) {
  key.addEventListener(`transitionend`, removeTransition);
});