// * 15.0 Метод массива "indexOf" очень прост — он помогает найти индекс значения, которое мы поместим в него, в качестве аргумента.
// 15.1 Разобьём этот большой массив на два поменьше, начиная с Ava Nicole Rodriguez. Сперва найдём Ava методом "find".
const team = [
  { name: 'Liam Chen', nationality: 'Chinese' },
  { name: 'Olivia Rose Peterson', nationality: 'American' },
  { name: 'Ethan James Williams', nationality: 'British' },
  { name: 'Ava Nicole Rodriguez', nationality: 'Mexican' },
  { name: 'Noah Carter', nationality: 'Jewish' },
  { name: 'Isabella Miller', nationality: 'Spanish' },
  { name: 'Jacob Davis', nationality: 'Jewish' },
];

const member = team.find((member) => member.name === 'Ava Nicole Rodriguez');

// 15.2 Находим индекс Авы, используя метод "indexOf".
const memberIndex = team.indexOf(member);

// 15.3 Теперь, когда мы узнали индекс члена команды, с которого нужно начинать разделение, то мы можем при помощи метода "split". Для этого создадим две переменных, куда поместим собственно две части оригинального массива.
const firstPart = team.slice(
  0,
  memberIndex
); /* Отрежем от массива все элементы до "memberIndex", но не считая его. */
const secondPart =
  team.slice(memberIndex); /* От "memberIndex", включая его до конца. */

console.log(firstPart);
console.log(secondPart);

// ? 15.4 "indexOf" может быть ещё полезен для проверки наличия элемента в массиве. Если он не найден, то вернётся "-1".
console.log(team.indexOf(3));

// 15.5 Что, если нам дали задание разбить массив с членами команды на две части, как мы это уже делали, но по половому признаку, чтобы у нас была 1 мужская и 1 женская команды? Мы заметили, что есть некая закономерность, что у членов команды мужского пола индекс нечётный. Используем для этого метод "forEach" и его второй аргумент index, который работает похожим образом на "indexOf".
let maleTeam = [];
let femaleTeam = [];

team.forEach((member, index) =>
  index % 2 === 0 ? maleTeam.push(member) : femaleTeam.push(member)
);

console.log(maleTeam);
console.log(femaleTeam);
