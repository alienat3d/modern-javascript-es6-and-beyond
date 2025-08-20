// * 23.0 Новый тип функций «generator function». У этих функций другой тип поведения, в сравнении с обычными. Обычно, когда мы запускаем функцию, то она работает до тех пор, пока не дойдёт до конца и не вернёт результат. Другими словами они следуют паттерну "run to completion model".
function getPizzaIngredients() {
  console.log('Wheat 🌾');
  console.log('Tomato 🍅');
  console.log('Cheese 🧀');
  console.log('Basil 🌿');
}

getPizzaIngredients();

// 23.1 У функции-генератора нет такого паттерна.
function* getPizzaIngredients2() {
  yield 'Wheat 🌾';
  yield 'Tomato 🍅';
  yield 'Cheese 🧀';
  yield 'Basil 🌿';
}

// ? 23.2 Такая функция возвращает «generator object». В этом объекте есть метод "next", который вернёт нам объект со свойствами "value" & "done". Свойство "value" имеет значение, что функция-генератор вытащила значением в этот раз. Мы говорим "в этот раз" потому, как вызывая этот метод мы как бы запускаем функцию на один шаг и тут же ставим на паузу и в следующий раз, когда мы снова запустим "next", то функция-генератор перейдёт к следующей своей строке yield и достанет следующее значение в свойство "value".
// ? 23.3 Теперь ко второму свойству возвращающего методом "next" объекта "done". Когда функция не только собирает значения, а ещё что-то возвращает, то это свойство становится true. И теперь вызывая функцию-генератор по второму кругу "value" уже будет "undefined", а "done" — true.
const generatorObject = getPizzaIngredients2();

console.log('1:', generatorObject.next());
console.log('2:', generatorObject.next());
console.log('3:', generatorObject.next());
console.log('4:', generatorObject.next());

console.log('1:', generatorObject.next());

// 23.4.0 Отличное использование таких функций будет на перебирании больших объёмов данных.
// 23.4.1 Рассмотрим на это примере большого массива с данными, где мы хотим найти конкретного супер-героя, на основании его суперспособности.
const superHeroesTeams = [
  {
    name: 'Dream Team',
    heroes: [
      {
        id: '1',
        name: 'Superman',
        superPowers: ['speed', 'x-ray vision', 'flying'],
      },
      {
        id: '2',
        name: 'Spider-Man',
        superPowers: ['spider sense', 'spider fibre'],
      },
      {
        id: '3',
        name: 'Batman',
        superPowers: ['money', 'immortality', 'science'],
      },
      {
        id: '4',
        name: 'Al',
        superPowers: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Svelte', 'PHP'],
      },
    ],
  },
  {
    name: 'Dream Agents Team',
    heroes: [
      {
        id: '1',
        name: 'James Bond',
        superPowers: ['shake it not stir it', 'crash experience'],
      },
      {
        id: '2',
        name: 'Jason Bourne',
        superPowers: ['losing memory'],
      },
      {
        id: '3',
        name: 'Jack Bauer',
        superPowers: ['punctuality'],
      },
    ],
  },
];

// 23.4.2 Но, получается, что нам нужно перебрать весь массив с данными, даже, если объект, который нам нужен стоит на первом месте в массиве. В функции-генераторе мы могли бы просто остановить перебор и не вызывать следующий метод, если нужный супер-герой уже найден.
/* superHeroesTeams.forEach((team) => {
  team.heroes.forEach((hero) => {
    hero.superPowers.forEach((superpower) => {
      if (superpower === 'immortality') {
        console.log(hero);
      }
    });
  });
}); */

// 23.4.3 Итак, создадим 3 функции-генератора: 1 - для перебора всех команд, 2 - для перебора всех героев, 3 - для перебора сверхспособностей героев. И начнём с последнего.
function* iteratePowers(superPowers) {
  for (let i = 0; i < superPowers.length; i++) {
    const superPower = superPowers[i];
    yield superPower;
  }
}

// 23.4.4 Создадим похожую функцию-генератор, но для супергероев. Причём нам не нужно собирать "yield" самих супергероев, но нам нужны их суперспособности, чтобы передать в функцию "iteratePowers".
// ? 23.4.5 Мы написали здесь "*" после "yield". Это необходимо, т.к. "iteratePowers" - другая функция-генератор и "yield*" позволит нам перебирать также и в функции-генераторе "iteratePowers".
function* iterateSuperHeroes(superHeroes) {
  for (let i = 0; i < superHeroes.length; i++) {
    const superHero = superHeroes[i];
    yield* iteratePowers(superHero.superPowers);
  }
}

// 23.4.7 Осталось написать функцию-генератор для команд, чтобы передать затем в функцию-генератор "iterateSuperHeroes".
function* iterateTeams(superHeroesTeams) {
  for (let i = 0; i < superHeroesTeams.length; i++) {
    const team = superHeroesTeams[i];
    yield* iterateSuperHeroes(team.heroes);
  }
}

// 23.4.8 Ок, теперь у нас три функции-генератора, которые помогут нам перебирать вложенные данные. Осталось создать объект-генератор, чтобы перебрать команды.
const generatorObj = iterateTeams(superHeroesTeams);

// 23.4.9 Также создадим переменную, которая будет хранить данные, возвращающие методом "next".
let result = generatorObj.next();

// 23.4.10 А теперь можно создать цикл "while", который будет выполняться, пока свойство "done" у объекта-генератора false. И внутри мы будем проверять, совпадают ли собранные в "value" значения с той суперспособностью, что мы ищем.
while (!result.done) {
  const superPower = result.value;

  if (superPower === 'immortality') {
    console.log('Superpower has been found!');
    break;
  } else {
    result = generatorObj.next();
  }
}

// ? 23.4.11 Таким образом, с помощью функций-генераторов можно существенно избежать лишнего расхода ресурсов при переборе огромных массивов данных.

// ============= //
// ? 23.4.6 Рассмотрим этот момент подробнее на этом маленьком примере. У нас две функции-генератора.
function* generatorOne() {
  yield '🎁 1: In generator one 🎁';
  yield '🎁 2: In generator one 🎁';
  yield '🎁 3: In generator one 🎁';
}

function* generatorTwo() {
  yield '🦄 1: In generator two 🦄';
  yield* generatorOne(); /* Если мы здесь не поставим "*" после "yield", то не получим результата выполнения функции-генератора "generatorOne". */
  yield '🦄 2: In generator two 🦄';
}

const obj = generatorTwo();

console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);

// ============= //
// 23.5.0 Помимо функций мы можем указать также массивы, "Map", "Set" и т.д.
function* emojiGenerator() {
  yield* ['🐩', '🍏', '🤖'];
}

const generatorObj2 = emojiGenerator();

// 23.5.1 Т.о. мы собираем здесь каждый элемент в массиве. И, если бы мы не добавили к "yield" "*", то собрался бы массив целиком.
// console.log(generatorObj2.next());
// console.log(generatorObj2.next());
// console.log(generatorObj2.next());

// ? 23.6 Или мы можем ещё использовать "spread-оператор", чтобы собрать все элементы массива сразу.
console.log([...generatorObj2]);

// ? 23.7 Ещё мы можем "лениво" запускать функцию, т.к. она генерирует собранные данные по заказу. Если, к примеру, есть какая-то функция, которая требует больших затрат ресурсов — она не запустится, пока нам действительно не понадобится. Это намного более эффективнее с точки зрения производительности, чем генерировать сразу все данные, сохранять до тех пор, пока возможно они когда-то понадобятся. Есть много случаев, где можно использовать функции-генераторы, но наиболее полезны они в тех случаях, где нужно достичь большего контроля над тем, когда функция выполняется.
