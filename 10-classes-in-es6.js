// * 8.0 Создание JS-классов в ES6. В ES5 использовались функциональные конструкторы для создания шаблонов сущностей, для которых в ES6 используют классы.
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const admin = new User('John', 'Doe');

console.log(admin.getFullName());

// 8.1 Так выглядит тот же код, переписанный JS-классом. Функция "constructor" используется для создания и инициализации объекта, созданного классом. Эта функция-конструктор вызывается автоматически, когда мы создаём новую сущность при помощи ключевого слова "new".
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const admin2 = new User('John', 'Doe');
console.log(admin2.getFullName());

// 8.2 Мы можем также расширять классы. Например у нас есть специфичный класс Admin, который расширяет класс User, т.е. наследует все его свойства и методы. Если нам нужен доступ к свойствам родительского класса (т.е. от которого текущий класс наследуется), то нам нужно использовать метод "super". И он принимает аргументом свойства, которые мы хотим, чтобы получил этот класс. А также добавим в функцию-конструктор новое, уникальное для класса Admin свойство "role" со значением "admin".
// ? 8.3 На самом деле мы не можем добавлять в новый "расширяющий класс" свойство без того, чтобы использовать метод "super" перед этим. Это вызовет ошибку.
class Admin extends User {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.role = 'admin';
  }
}

const superUser = new Admin('Willie', 'Brandt');

console.log(superUser);
