// * 13.0 Метод "filter". Иногда нам нужно создавать отфильтрованные версии массива, которые будут содержать подгруппы оригинального массива по какому-то критерию. Например, здесь у нас массив объектов с товарами и нужно отфильтровать только те товары, что есть в наличии на складе. Метод "filter" переберёт все элементы массива и добавит в новый, если он подходит условию.
const products = [
  {
    name: 'Turtle Socks',
    stock: 0,
  },
  {
    name: 'Turtle Shield',
    stock: 1,
  },
  {
    name: 'Wig',
    stock: 0,
  },
  {
    name: 'Samurai Sword',
    stock: 1,
  },
];

const productsInStock = products.filter((item) => item.stock > 0);

console.log(productsInStock);

// 13.1 Или например, если мы хотим показать наши задачи в трёх вариантах: все, выполненные и невыполненные, то здесь также будет этот метод очень удобен.
const tasks = [
  { task: 'Do dishes', done: false },
  { task: 'Walk dog', done: true },
  { task: 'Do laundry', done: true },
  { task: 'Clean room', done: true },
  { task: 'Cook dinner', done: false },
];

const completedTasks = tasks.filter((task) => task.done);
const uncompletedTasks = tasks.filter((task) => !task.done);

console.log('All tasks: ', tasks);
console.log('Completed tasks: ', completedTasks);
console.log('Uncompleted tasks: ', uncompletedTasks);
