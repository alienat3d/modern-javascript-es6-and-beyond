// * 10.0 Мы можем описать промисы более "чистым" способом при помощи связки "async...await". Ключевое слово "async" позволяет создать асинхронную функцию.
// 10.1 Создадим функцию "myPromiseFunc", которая возвращает промис. И мы хотим иметь доступ к значению этого промиса в другой функции "firstFunc".
// 10.2 Теперь мы попробуем обратиться к данным промиса первой функции из второй функции, а также напишем с помощью неё что-то в консоль на следующей строке. И результатом увидим, что сперва в консоли появился результат вызова метода "console.log", а уже потом результат вызова промиса. Это потому, что JS поставил промис в режим ожидания, пока "call stack" освободится, т.к. в нём уже был метод "console.log".
function myPromiseFunc() {
  return new Promise((res) => res('promise finished'));
}

function firstFunc() {
  myPromiseFunc().then((res) => console.log(res));
  console.log('firstFunc finished');
}

firstFunc();

// 10.3.0 Теперь создадим вторую функцию при помощи связки ключевых слов "async...await". Функция "secondFunc" асинхронная и это значит, что когда она вызывается, то не будет блокировать выполнение основного скрипта и неявно возвращает промис. Внутри этой функции мы получим доступ к результату функции-промиса "myPromiseFunc" поставив перед её вызовом ключевое слово "await".
// 10.3.1 При кажущейся похожести функции "secondFunc" на "firstFunc", у "secondFunc", благодаря слову "await" мы, как бы ставим на паузу дальнейшее исполнение этой функции до тех пор, пока не получим результат выполнения функции-промиса "myPromiseFunc", поэтому и порядок получения результатов этих функций будут разными.
async function secondFunc() {
  console.log(await myPromiseFunc());
  console.log('secondFunc finished');
}

secondFunc();

// 10.4.0 В предыдущем уроке мы уже рассматривали случай загрузки картинки с Dog API и упоминали метод "fetch", хотя и использовали промис для этого. Но на практике именно метод "fetch" будет встречаться гораздо чаще.
/* fetch('https://dog.ceo/api/breeds/image/random')
  .then((res) => res.json())
  .then((res) => console.log(res)); */

// 10.4.1 Возьмём этот метод "fetch" для примера как мы можем использовать с ним "async...await". Сначала с помощью "await" мы ждём получения ответа сервера на запрос методом "fetch", после чего он помещается в константу "data" и также ждём обработки этих данных методом "json", чтобы потом только вывести в консоль.
(async () => {
  const data = await fetch('https://dog.ceo/api/breeds/image/random');
  const jsonData = await data.json();
  console.log(jsonData);
})();

// 10.5.0 В этом примере функции "makeAsyncRequest" и "makePromiseRequest" по существу одинаковы с той лишь разницей, что ключевым словом "await" мы ставим на паузу исполнение этой функции до получения результата той функции перед которой стоит это слово.
const myPromise = new Promise((res) => res('Hello there!'));

const makeAsyncRequest = async () => {
  await myPromise();
  await myPromise();
  await myPromise();
};

const makePromiseRequest = () => {
  return myPromise()
    .then(() => myPromise())
    .then(() => myPromise())
    .then(() => myPromise());
};

// 10.5.1 Ещё одна разница заключается в том, что функция с ключевым словом "async" всегда вернёт промис. Как мы видим на этом примере, что эти две функции сработали идентично.
function myFirstPromise() {
  return new Promise((res) => res('I resolved!'));
}

async function mySecondPromise() {
  return 'I resolved too!';
}

myFirstPromise().then((res) => console.log(res));
mySecondPromise().then((res) => console.log(res));

// 10.6 Это может быть практичным, если мы не хотим использовать методы промиса, такие как "resolve", а просто хотим вернуть значение из асинхронной функции.
const getNum = (num) => Promise.resolve(num);
const getNum2 = async (num) => num;

getNum(5).then((res) => console.log(res));
getNum2(5).then((res) => console.log(res));

// 10.7 Если промис провалился с ключевым словом "await", то это сработает также, как если бы у него были ключевые слова "throw new Error".
async function secondFunction() {
  const data = await Promise.reject('Oops!');
  console.log(data);
}

secondFunction();

// 10.8.0 Т.к. функция с ключевым словом "await" может вызвать ошибку мы можем использовать "try...catch" блок, чтобы поймать её. Значение параметра, передаваемого в "catch" это значение провалившегося промиса.
// 10.8.1 Рассмотрим на таком примере: у нас есть асинхронная функция "fetchUser", которая может использоваться для получения пользователя по его id.
/* async function fetchUser(id) {
  try {
    const response = await fetch(`https://web.com/user/${id}`);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

fetchUser(1); */

// 10.8.2 Если же мы не хотим использовать блок "try...catch", то мы можем использовать метод "catch" прямо на вызове функции.
async function fetchUser(id) {
  const response = await fetch(`https://web.com/user/${id}`);

  return await response.json();
}

fetchUser(1).catch((error) => console.log(error));
