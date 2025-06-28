// * 0.0 В отличии от var, let & const имеют ограниченную область видимости, что делает код более стабильным и предсказуемым.

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log('Case #1: ', i);

for (let index = 0; index < 3; index++) {
  console.log(index);
}

console.log('Case #2: ', index); // выходит ошибка "ReferenceError: index is not defined", т.к. index, объявленный с let находится вне зоны видимости этой строки вызова (она снаружи цикла).

// 0.1 А также даёт возможность использовать одни и те же названия переменных в разных блоках, т.к. они друг о друге не знают и следовательно не мешают. А ещё это хорошо из соображений производительности.

function checkPassword(password) {
  const valid = password.length > 6;
  if (valid) {
    const message = 'Your password is valid';
    console.log(message);
  } else {
    const message = 'Your password is not valid';
    console.log(message);
  }
}

checkPassword('123');
checkPassword('1234567');
