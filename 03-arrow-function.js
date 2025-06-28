// * 1.0 Отличия стрелочных функций от обычных. А также "function expression" vs. "function declaration".
// 1.1 Итак у нас есть "function declaration", вид записи, при котором мы можем использовать эту функцию хоть перед ней в коде, хоть после, это не имеет значения, т.к. она сразу попадает в глобальную память (желательно не использовать без острой необходимости).

greeting(); // работает

function greeting() {
  return 'Hey there!';
}

// greeting2(); // не работает, ошибка: ReferenceError: Cannot access 'greeting2' before initialization

const greeting2 = function (params) {
  return 'Hey there!';
};

greeting2(); // работает

// 1.2 Стрелочная функция отличается от обычных не только лаконичностью записи, но и областью видимости, рассмотрим на примере:
var radius = 5;

const shape = {
  radius: 10,
  diameter: function () {
    console.log(this.radius * 2);
  },
  diameter2: () => console.log(this.radius * 2),
};

shape.diameter(); /* 20 */
shape.diameter2(); /* 10, потому, что стрелочная функция не ссылается на переменную radius в объекте shape, а сразу ищет за пределами своего окружения. */

// 1.3.0 Или рассмотрим эту возможность стрелочной функции выходить за свою зону видимости на следующем примере:
// ? 1.3.1 Если бы мы использовали не стрелочную, а обычную функцию, то получили бы вместо "Super Man" — "undefined".
const hero = {
  name: 'Super Man',
  greet: function () {
    setTimeout(() => {
      console.log('Hi, my name is', this.name);
    }, 1000);
  },
};

hero.greet();
