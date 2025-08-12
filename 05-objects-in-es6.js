// * 3.0 ES6 даёт возможность избегать повторений и записывать код короче, если в объекте ключ и значение одноимённые.
// ES5
function createPerson(name, age, admin) {
  return {
    name: name,
    age: age,
    isAdmin: admin,
  };
}

console.log(createPerson('Al', 38, true));
console.log(createPerson('Alexya', 36, false));

// ES6
function createPerson(name, age, admin) {
  return {
    name,
    age,
    isAdmin: admin,
  };
}

console.log(createPerson('Al', 38, true));
console.log(createPerson('Alexya', 36, false));

// 3.1.0 Теперь нам также не обязательно добавлять новую связку ключ-значение подобным образом, ...
// ES5
const specialProperty = 'nationality';

const person = {
  name: 'John',
  age: 45,
  isAdmin: false,
};

person[specialProperty] = 'British';

console.log(person);

// 3.1.1 ... а мы можем сразу это сделать внутри объекта, облачив название ключа в "[]". Это может быть очень полезным, если название ключа не останется неизменным.
// ES6
const specProperty = 'nationality';

const person2 = {
  name: 'Johannes',
  age: 25,
  isAdmin: false,
  [specProperty]: 'German',
};

console.log(person2);

// 3.2 Или представим, что у нас некая функция, создающая объект, возвращающая внутри объекта ключ и значение из её аргументов.
function makeObject(key, value) {
  return { [key]: value };
}

const user = makeObject('username', 'James');
const dog = makeObject('breed', 'Pudel');

console.log(user);
console.log(dog);

// 3.3.0 А ещё в ES5, если бы свойство было бы методом, то мы бы писали ключ сразу за значением, рассмотрим на примере метода "getFullName", который возвращает полное имя из объекта person3.
// ES5
const person3 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person3.getFullName());

// 3.3.1 В ES6 мы можем избавиться от слова "function" для метода объекта.
// ES6
const person4 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person4.getFullName());
