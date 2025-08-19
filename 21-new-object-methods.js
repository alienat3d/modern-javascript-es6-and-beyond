// * 20.0 В ES6 появились также новые методы объектов, например "assign", "keys", "values" & "entries".
// ? 20.1.0 С методом "assign" мы можем скопировать все свойства одного объекта в другой объект. Первый объект называют "source object", а тот, в который копируют "target object".
// 20.1.1 Рассмотрим на примере. Нам нужно объединить оба объекта, чтобы потом отослать на бэкенд единым объектом.
const person = { firstName: 'John', lastName: 'Doe' };
const auth = { email: 'john@doe.com', password: 'admin123' };

// 20.1.2 Создадим ещё одну переменную "data", в которую поместим объект, который будет содержать эти два объекта. Вызывается этот метод через глобальный объект Object, где первым аргументом идёт "target object", а вторым "source object".
const data = Object.assign(person, auth);

console.log('data', data);
console.log('person', person); /* Также был модифицирован. */

// 20.1.3 Если же мы хотим объединить два объекта, но не хотим, чтобы "target object" был модифицирован, то можно использовать вместо "assign" spread-оператор.
const data2 = { ...person, ...auth };

console.log('data2', data2);

// 20.2.0 Ещё одна известная трудность с объектами, что вложенные объекты & массивы не копируются, а передаются по ссылке (т.к. они ссылочные типы данных). А значит, если что-то поменяется в этом вложенном объекте, то также поменяется и в только что созданном новом.
// 20.2.1 Итак, на этом примере создадим новый объект на основе объекта "me" при помощи метода "assign".
const me = {
  name: 'Al',
  info: {
    country: 'DE',
  },
};

const meClone = Object.assign({}, me);

meClone.name =
  'John'; /* Никаких проблем, т.к. свойство "name" не находится во вложенном объекте. Поэтому значение свойства "name" было изменено лишь в объекте "meClone" */
meClone.info.country =
  'USA'; /* Теперь значение свойства "country" было изменено в обоих объектах, т.к. оно находится во вложенном объекте и было передано по ссылке, а не на самом деле склонировано. */

console.log('me', me);
console.log('meClone', meClone);

// ======= //
// ? 20.3.0 С методами "keys" & "values" мы можем вернуть массив со всеми ключами или значениями объекта, который в них передадим.
const deliveryInfo = {
  street: '100 Main St',
  postalCode: '11111',
  city: 'New York City',
  state: 'NY',
};

console.log(Object.keys(deliveryInfo));
console.log(Object.values(deliveryInfo));

// 20.3.1 Это может быть очень полезным, когда нам нужно проверить содержит ли объект нужное свойство.
const includesState = Object.keys(deliveryInfo).includes('state');
const state = includesState ? deliveryInfo.state : 'CA';

console.log(state);

// ? 20.4 При помощи метода "entries" можно создать массив массивов, в каждом из которых будет содержаться по два элемента: 1 - значение ключа\название свойства объект, 2 - значение этого ключа\свойства.
console.log(Object.entries(deliveryInfo));

// 20.5 К примеру, если информацию о доставке мы хотим иметь не в качестве объекта, а в "Map". То мы сначала разобьём объект на множество массивов, а потом поместим их в конструктор "Map".
const deliveryInfoMap = new Map(Object.entries(deliveryInfo));

console.log('deliveryInfoMap', deliveryInfoMap);

// 20.6 В большинстве случаев мы наверняка выберем использовать "keys" или "values" вместо "entries", но бывают случаи, которые "entries" могут помочь сэкономить строки кода, например для быстрого переформатирования данных.
Object.entries(deliveryInfo).forEach((field) => {
  const [key, value] = field;
  console.log(`${key.padEnd(10)} ${value}`);
});
