function playSound(a) { // узнать почему этот парметр содержит все все св-ва, если выводим clg, да и при использовании
  const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${a.keyCode}"]`);

  if (!audio) return; // останавливаем выполненеи функции, значение null не возвращается

  audio.currentTime = 0; // при нажатти перекидываем на начало https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement 
  audio.play();
  key.classList.add(`playing`);
}

window.addEventListener(`keydown`, playSound); // Почему не нужны скобки после функции. Если их ставить функция
//исполнится по загрузке страницы. Т.е. вызовется. А т.к. это callback функция, браузер по клику должен вызвать её для нас
// и т.к. мы используем фукционал и синтаксис языка, это педусмотрено. 

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

// лучше не использовать анонимную функцию в eventListener в целях reusing в др листенерах допустим 
// ПРИНЦИП DRY

// термины используемые для добавления\удаления листенера
// bind() function is used to attach an event handler to elements,
// while the unbind() is used to detached an existing event handler from elements.

/* Если в листенере использовалась, анонимная функция, то не получится удалить, этот листенер(точнее исполнение этой функции). Будет возможность сделать 
это только, если есть arrow function или named function. 

- работа с множественными элементами aeuryselectorall
*/