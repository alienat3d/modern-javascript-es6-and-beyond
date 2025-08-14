// * 4.0 В ES6 появилась возможность устанавливать значение по умолчанию для параметров функции
function greeting(name = 'Al') {
  return `Hello there, ${name}`;
}

console.log(greeting('Mike'));
console.log(greeting());

function createSuperHero(name, healthPoints = 100) {
  return `You’re ${name} and have ${healthPoints} health points.`;
}

const superman = createSuperHero('Super Man');
const superwoman = createSuperHero('Super Woman', 90);

console.log(superman);
console.log(superwoman);

// 4.1 Или как в этом случае, где у нас функция добавления какого-то элемента в массив, в котором есть аргументы элемента и массива, который по умолчанию будет пустым массивом.
function addListItem(item, list = []) {
  list.push(item);
  return list;
}

console.log(addListItem('apple'));
console.log(addListItem('banana', ['pineapple']));

// 4.2.0 И даже функция может быть значением параметра по умолчанию.
function getDate() {
  const date = new Date();
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;
  const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return `[${formattedDate}] (${formattedTime})`;
}

// 4.2.1 Также у нас будет функция, с аргументами сообщения и префикса для логирования времени сообщения. И мы вряд ли захотим каждый раз указывать время для аргумента "prefix" вручную, поэтому зададим ему значение по умолчанию вызов функции "getDate".
function logMessage(message, username = 'anonymous', prefix = getDate()) {
  console.log(`${prefix} ${username} wrote: ${message}`);
}

logMessage('I like turtles!');
logMessage('I love coding!', 'Al');
