// ES5
function sayHi(name) {
  return 'Hello there, ' + name;
}

console.log(sayHi('Al'));

// ES6
// 2.0 С помощью интерполяции можно записывать выражения короче и элегантнее.
function sayHi(name) {
  return `Hello there, ${name}`;
}

console.log(sayHi('Al'));

// 2.1 А также можно использовать их и в путях, избегая множества повторений и ошибок с связанных с опечатками.
const baseUrl = 'https://swapi.co/api';

fetch(`${baseUrl}/people/1`)
  .then((res) => res.json())
  .then((json) => console.log(json));

fetch(`${baseUrl}/people/2`)
  .then((res) => res.json())
  .then((json) => console.log(json));

// 2.2 Или может быть использована в выводе результата функции.
const sum = (a, b) => `Sum: ${a + b}`;

console.log(sum(1, 3));

// 2.3 Также интерполяция позволяет удобно записывать вывод на несколько строк, в то время как в ES5 приходилось использовать "\n" ("escape characters") для этой цели.
// ES5
const result = 'Sarah: 1\nPeter: 2';

console.log(result);

// ES6
const result2 = `Sarah: 1 
Peter: 2`;

console.log(result2);

// 2.4.0 Или мы можем спарсить функцию используя т.н. "теги". Например здесь у нас у функции три аргумента.
const name = 'Al';
const age = 38;

const greet = (greeting, name, age) => {
  console.log(greeting);
  console.log(name);
  console.log(age);
};

// 2.4.1 Далее мы можем вызвать функцию используя кавычки интерполяции. Если заглянуть в консоль, то константа "greeting" будет массивом и содержать в себе значения строки.
greet`My name is ${name} and I am ${age} years old.`;

// 2.5.0 Ещё одно хорошее применения интерполяции это CSS-свойства. А именно их динамическое изменение.
const box = document.getElementById('box');

box.style.backgroundColor = 'purple';

const input = document.getElementById('input-box');

input.addEventListener('change', handleUpdate);

// 2.5.1 Итак, если мы хотим, чтобы вместо хардкода у наз значения элемента "box" были вдвое больше размерами, чем значение, введённое в "input", то интерполяция нам здесь очень сподручна.
// 2.5.2 Сперва мы получим размеры инпута через event.target.value, а также для расчётов переведём полученное строчное значение в число методом "parseInt", а затем удвоим значение.
function handleUpdate(evt) {
  // box.style.height = '50px';
  // box.style.width = '50px';
  box.style.height = `${parseInt(evt.target.value) * 2}`;
  box.style.width = `${parseInt(evt.target.value) * 2}`;
}
