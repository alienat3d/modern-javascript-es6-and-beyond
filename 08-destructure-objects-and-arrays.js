// * 6.0 Начиная с ES6 можно деструктурировать специальным синтаксисом объекты и массивы, вычленяя из них нужные свойства для прямого обращения к ним.
const person = {
  name: 'John Doe',
  age: 45,
};

// 6.1.0 Например, в этом примере у нас объект с двумя свойствами "name" & "age" и мы можем деструктуризацией вычленить их в одноимённые переменные, чтобы дальше работать с ними.
const { name, age } = person;

// 6.1.1 Что, в общем, эквивалентно этому:
// const name = person.name;
// const age = person.age;

// 6.2 И, когда мы поместим эти переменные в "console.log", то увидим, что они соответствуют значению одноимённого свойства объекта "person".
console.log(name, age);

// 6.3 Однако, мы также можем давать этим переменным названия, отличные от названия свойства, которое в них помещается, тогда запись будет чуть отличаться.
const { name: memberName, age: memberAge } = person;

console.log(memberName, memberAge);

// 6.4 Также можно деструктурировать массивы.
const fruits = ['apple', 'banana', 'kiwi'];

const [first, second, third] = fruits;

console.log(first, second, third);

// 6.5 Деструктуризация также помогает проще менять местами переменные. Скажем, у нас есть две переменные "min" & "max", для минимального числа и максимального. Теперь мы можем прописать простое условие, что если значение в "min" больше, чем в "max", то меняем их местами в массиве.
let [min, max] = [25, 19];

if (min > max) {
  [min, max] = [max, min];
}

console.log('Min: ', min);
console.log('Max: ', max);

// 6.6.0 Можно также применять rest-оператор для деструктуризации массива.
const team = [
  { name: 'Brendan Eich' },
  { name: 'Evan You' },
  { name: 'Timothy Berners-Lee' },
];

// 6.6.1 Здесь мы знаем, что первым в массиве у нас идёт босс компании. И мы, например, хотим отделить его от остальных деструктуризацией.
const [boss, ...employees] = team;

console.log(boss);
console.log(employees);

// 6.7 Также можно присвоить переменным значения по умолчанию на случай, если этих значений нет или они не могут быть определены.
const reminder = {
  note: 'Call with John',
};

const { note, createdAt = new Date() } = reminder;

console.log(note);
console.log(createdAt);

// 6.8 Ещё мы может деструктурировать объекты в аргументах функции.
function fetchDogs({ breed }) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

const dog = {
  name: 'Max',
  breed: 'labrador',
  color: 'brown',
  age: 8,
};

// 6.8.1 И теперь, когда мы поместим в функцию "dog", то параметром будет взято лишь значение свойства "breed", по которому будут найдены только фотографии с собаками породы лабрадор.
fetchDogs(dog);
