window.addEventListener(`keydown`, function (a) { // узнать почему этот парметр содержит все все св-ва, если выводим clg, да и при использовании
  const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);

  if (!audio) return; // останавливаем выполненеи функции

  audio.currentTime = 0; // при нажатти перекидываем на начало https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement 
  audio.play();
});