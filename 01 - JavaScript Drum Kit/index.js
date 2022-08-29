"use string";
//  первое слушаем событие(точнее находим event object) на странице(используя глобальный объект виндоу) и тем самым находим объект событиеБ выводим его в консоль
// находим там пареметр keyCode, сейчас считается устаревшим. Заменим на code

// далее для того, чтобы функция прерывалась, в случае, если у тега аудио нет привязки к клавиши. Не находился null другими словами, делаем ограничение работы функции через if(!audio) - т.е. фолс и мы делаем return выходим из функции

// когда убеждаемся, что объект аудио находится, в нашу первую функцию добавляем с web api DOM - Audio play() Method
// для того чтобы мелодия играла с самого началапри любом нажатии необходимо устновить HTML Audio/Video DOM currentTime Property на 0
// audio.currentTime = 0;

//ДАлее добавялем анимацию, а именно через класслист класс плэинг

// потом слушаем все клавиши, это уже другая функция. ТОчнее выбираем все клавиши, затем через цикл или через форич метод слушаем их все на предмет свойства тразишн энд, если оно есть то мы добавялем функцию которая удаляет эту св-во, этот транзишн энд
// и услышит он это от 6-7 св-в этот транзигн энд и поэтому мы выбираем только одно из них трансформ, т.е. в функции которая слушает фильтр делает через !== трансформ
// в эту функцию через this прописываем, удаление св-ва playing

// выносим все наши первые детсйвия в отдельную функцию Playsound

function playMusic(e) {
  const key = document.querySelector(`div[data-key='${e.code}']`);
  const audio = document.querySelector(`audio[data-key='${e.code}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add(`playing`);
}

function endTransition(e) {
  if (e.propertyName !== `transform`) return;
  console.log(e);
  this.classList.remove(`playing`);
}
// здесь допустил ошибку, выбрал все элементы, мало того, что не перевёл нод лист в массив, так ещё и цфыпляю слушатель событий сразу к массиву а не через перебор и инидвидуально к каждому элементу.
const keys = Array.from(document.querySelectorAll(`.key`));

keys.forEach((key) => {
  key.addEventListener("transitionend", endTransition);
});

window.addEventListener(`keydown`, playMusic);

// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
// https://learn.javascript.ru/dom-attributes-and-properties#nestandartnye-atributy-dataset
// https://developer.mozilla.org/ru/docs/Learn/HTML/Howto/Use_data_attributes - здесь не подходит
