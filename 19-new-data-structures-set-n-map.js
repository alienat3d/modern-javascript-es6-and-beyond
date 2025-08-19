// * 18.0 В ES6 появилась новая структура данных "Set" & "Map". В "Map" можно хранить ключи и значения и чтобы их создавать у нас есть конструктор Map. И поместим внутрь что-то итерабельное, например массив массивов, где первым элементом будет ключ, а вторым значение связки ключ-значение.
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

console.log(map);

// ? 18.1 Чтобы получить доступ к значению используем метод "get", в который пишем название ключа, значение которого хотим получить.
console.log(map.get(2));

// ? 18.2 Также можно добавить новую связку при помощи метода "set", который принимает 2 аргумента: 1) название ключа, 2) значение.
map.set(4, 'four');

console.log(map);

// ? 18.3.0 Почему просто не использовать объект для этого, в чём преимущество "Map"? Во-первых, в "Map" ключом может быть любое значение и тип данных, примитивы, Symbol и даже функция. Во-вторых, в "Map" ключи идут в том порядке, в каком их туда добавляли. В-третьих "Map" перебираемый (а значит можно использовать "forEach" & "for of").
// 18.3.1 Сравним "Map" и объект с одинаковыми значениями.
const testMap = new Map([
  [2, 'two'],
  [3, 'three'],
]);

const testObject = { 2: 'two', 3: 'three' };

testMap.set(1, 'one');
testObject[1] = 'one';

console.log(testMap); /* Сохранил порядок добавления. */
console.log(testObject); /* Был отсортирован по значению ключей. */

// 18.4 Попробуем применить "forEach" на "Map".
map.forEach((value, key) => console.log(`${key} — ${value}`));

// 18.5 В общем мы скорее будем прибегать к "Map", чем к объекту или массиву, когда нам нужно добавлять/удалять множество свойств. Рассмотрим на примере корзины покупок онлайн магазина.
const cart = new Map();

const shoe = {
  id: 0,
  name: 'Shoe',
  price: 50,
};

const shirt = {
  id: 1,
  name: 'Shirt',
  price: 15,
};

// 18.6 Для добавления артикля в корзину создадим функцию "addToCart". Если корзина уже содержит артикль с тем же id, то мы просто увеличим кол-во. Иначе добавим его в корзину. Используя "Map" мы можем проверить содержит ли значение используя метод "has". И можно получить доступ через метод "get". А с помощью метода "set" мы поместим этот артикль внутрь корзины, если его там ещё нет в наличии.
function addToCart(item) {
  if (cart.has(item.id)) {
    const cartItem = cart.get(item.id);
    cartItem.quantity++;
  } else {
    cart.set(item.id, { ...item, quantity: 1 });
  }
}

// 18.9 Мы хотим также иметь возможность удалять вещи из корзины. В этом поможет метод "delete".
function deleteFromCart(item) {
  if (cart.get(item.id).quantity > 1) {
    const cartItem = cart.get(item.id);
    cartItem.quantity--;
  } else {
    cart.delete(item.id);
  }
}

addToCart(shoe);
addToCart(shoe);
addToCart(shoe);
addToCart(shoe);
addToCart(shoe);
addToCart(shirt);
addToCart(shirt);

deleteFromCart(shoe);
deleteFromCart(shoe);
deleteFromCart(shoe);
deleteFromCart(shirt);
deleteFromCart(shirt);

console.log(cart);

// 18.7 Может это не самый очевидный способ и более удобным будет использовать метод "values" и цикл "for of". Теперь мы получаем в консоль обычный объект.
for (let item of cart.values()) {
  console.log(item);
}

// 18.8 Добавим ещё возможность посмотреть сколько пар обуви у нас в корзине и сколько всего артиклей в ней с помощью метода "size".
console.log('Pair of shoes in cart: ', cart.get(shoe.id).quantity);
// console.log('Shirts in cart: ', cart.get(shirt.id).quantity);
console.log('Total items in cart: ', cart.size);

// * ================ *
// ? 18.9 Другая структура "Set" представляет собой коллекцию уникальных значений. Также, как и "Map" создаётся конструктором. Отлично подходит для задач, когда нам нужно избавиться от дубликатов значений. В отличии от массива в "Set" элементы не имеют индекса, т.к. это коллекция связок ключ-значение. Поэтому прямого доступа к элементу по его индексу (вроде set[0]) не будет. Однако можно создать массив на основе сета. Т.к. они перебираемые, то можно применить spread-оператор на них.
const set = new Set([1, 1, 1, 2, 2, 3, 3, 3, 4, 5]);

console.log(set);

// 18.10.0 Например у нас список стран клиентов, зашедших в наш магазин, но нам хочется сколько всего уникальных стран, а значит, нам нужно преобразовать данный массив, избавиться от дубликатов в нём.
const countries = [
  'DE',
  'USA',
  'UK',
  'NL',
  'ES',
  'DE',
  'UA',
  'USA',
  'USA',
  'USA',
  'DE',
  'NO',
  'NL',
  'PT',
  'UK',
  'USA',
];

const countriesSet = new Set(countries);

// 18.11 Если нужно добавить ещё элементов в сет, то используем метод "add".
countriesSet.add('IT');

console.log('Total unique countries: ', countriesSet.size);

// 18.10.1 Или, чтобы преобразовать в обычный массив.
const uniqueCountriesArr = [...countriesSet];
console.log('uniqueCountriesArr', uniqueCountriesArr);

// 18.12 Можно перебрать сет с помощью метода "forEach"
countriesSet.forEach((item) => console.log(item));

// 18.13 И как в случае с "Map" мы можем очистить всё содержимое из "Set" с помощью метода "clear".
countriesSet.clear();

console.log(countriesSet);

// 18.14.0 Для другого примера у нас есть массив VIP-членов клуба. И нам хочется узнать из скольки стран приехали гости.
const vipMembers = [
  { name: 'Jack Nicholson', country: 'USA' },
  { name: 'Anthony Hopkins', country: 'UK' },
  { name: 'Robert de Niro', country: 'USA' },
  { name: 'Michael Fassbender', country: 'Germany' },
  { name: 'Arnold Schwarzenegger', country: 'Austria' },
];

// 18.14.1 Сперва методом "map" вытащим все названия стран VIP-гостей.
const membersCountries = vipMembers.map((member) => member.country);

// 18.14.2 Но т.к. нам нужна коллекция именно уникальных названий стран, то поместим этот массив в сет.
const uniqueMembersCountries = [...new Set(membersCountries)];

console.log(
  `We have VIP-members on our event from ${uniqueMembersCountries.length} countries!`
);
