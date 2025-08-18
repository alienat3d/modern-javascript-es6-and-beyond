// * 14.0 Метод массива "find". К примеру у нас есть массив объектов с информацией о членах команды и мы хотим написать функцию, которая будет возвращать конкретного члена команды по его имени. Здесь отлично подойдёт метод "find", который возвращает первое совпадение с условием в нём, которое найдёт в массиве. А если ничего не найдёт, то вернёт undefined.
const team = [
  { name: 'Liam Chen', nationality: 'Chinese' },
  { name: 'Olivia Rose Peterson', nationality: 'American' },
  { name: 'Ethan James Williams', nationality: 'British' },
  { name: 'Ava Nicole Rodriguez', nationality: 'Mexican' },
  { name: 'Noah Carter', nationality: 'Jewish' },
  { name: 'Isabella Miller', nationality: 'Spanish' },
  { name: 'Jacob Davis', nationality: 'Jewish' },
];

function findTeamMemberByName(name) {
  return team.find((member) => member.name === name);
}

// 14.1 Создадим также функцию, которая будет искать члена команды по его национальности.
function findTeamMemberByNationality(nationality) {
  return team.find((member) => member.nationality === nationality);
}

// 14.2 Попробуем объединить эти две функции и сперва отсортируем членов команды по национальности, а потом попробуем найти их по имени.
function findJewishTeamMemberByName(name) {
  const jewishMembers = team.filter(
    (member) => member.nationality === 'Jewish'
  );

  return jewishMembers.find((member) => member.name === name);
}

// 14.3 Можно также создать функцию, которая будет искать по нескольким критериям по имени и по национальности.
function findMember(name, nationality) {
  return team.find(
    (member) => member.name === name && member.nationality === nationality
  );
}

console.log(findTeamMemberByName('Jacob Davis'));
console.log(findTeamMemberByName('Noah Carter'));
console.log(findTeamMemberByName('Ava Nicole Rodriguez'));

console.log(findTeamMemberByNationality('British'));
/* Как мы видим второй член команды еврейской национальности у нас не попал в массив. */
console.log(findTeamMemberByNationality('Jewish'));

console.log(findJewishTeamMemberByName('Jacob Davis'));

console.log(findMember('Jacob Davis', 'Jewish'));
console.log(findMember('Liam Chen', 'Chinese'));
console.log(
  findMember('Ethan James Williams', 'Chinese')
); /* Не подходит национальность и поэтому undefined */
