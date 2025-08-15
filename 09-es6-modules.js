// * 7.0 До ES6 приходилось разбивать JS-код следующим образом:
// index.js
const sum = require('./sum');

console.log(sum(1, 2));

// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;

// 7.1 С ES6 мы можем использовать новые ключевые слова "export" & "import" для этого:
// index.js
// 7.3 Если требуется, то мы можем импортировать функцию с другим именем или алиасом.
// import { sum as addAll, multiply } from ('./calc');
// 7.4.0 Мы также можем импортировать все именованные экспорты скопом при помощи "*" as 'var_name' и тогда каждая из функций будет свойством объекта "Calc".
// 7.4.1 Однако, обычно это не нужно, т.к. если мы будем импортировать всё скопом, то можно добавить функции, которые в этом конкретном месте не нужны.
// import * as Calc from ('./calc');
// import mySum, * as Calc from ('./calc');
import mySum, {multiply} from ('./calc');

// console.log(addAll(1, 2));
// console.log(multiply(2, 3));
// console.log(Calc.sum(1, 2));
// console.log(Calc.multiply(2, 3));
console.log(mySum(1, 2));
console.log(multiply(2, 3));

// calc.js
// 7.5 Есть также экспорт с ключом "default", что означает, что какое бы мы слово не подставили, то будет браться из файла эта функция. Может быть лишь один экспорт по умолчанию на файл. Однако, мы можем импортировать также и именованные функции вместе с по умолчанию по примеру выше.
export default function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

/* 7.2 Либо, вместо слов "export" в начале функции мы можем экспортировать деструктуризацией. */
// export { sum, multiply };
