// * 17.0 Методы массивов по настоящему обретают силу, когда сочетаются друг с другом. Рассмотрим на таком примере: у нас в массиве есть список постов разных авторов и мы хотим отсортировать только посты от John Doe, точнее его посты, где > 100 просмотров и составить новый массив языков, на которые эти посты переведены.
const posts = [
  {
    title: 'Blog Post 1',
    author: 'John Doe',
    views: 120,
    langs: ['EN', 'NL', 'DE', 'JA'],
  },
  {
    title: 'Blog Post 2',
    author: 'Jane Doe',
    views: 40,
    langs: ['EN', 'NL', 'RU', 'PT', 'ES'],
  },
  {
    title: 'Blog Post 3',
    author: 'John Doe',
    views: 95,
    langs: ['EN', 'DE', 'NO', 'DK', 'SE'],
  },
  {
    title: 'Blog Post 4',
    author: 'Jane Doe',
    views: 28,
    langs: ['EN', 'NL', 'DE', 'NO', 'SE'],
  },
  {
    title: 'Blog Post 5',
    author: 'John Doe',
    views: 107,
    langs: ['EN', 'NL', 'ES', 'UA', 'IT'],
  },
  {
    title: 'Blog Post 6',
    author: 'Will Smith',
    views: 93,
    langs: ['EN', 'RU', 'ES', 'UA', 'DK', 'FR', 'DE'],
  },
  {
    title: 'Blog Post 7',
    author: 'Jim Joe',
    views: 33,
    langs: ['EN', 'FR', 'ES', 'DE', 'UA'],
  },
  {
    title: 'Blog Post 8',
    author: 'Will Smith',
    views: 218,
    langs: ['EN', 'FR', 'ES', 'DK', 'UA', 'JP', 'NO'],
  },
];

// 17.1 Мы отфильтруем из оригинального массива только посты от Джона До с просмотрами больше или равно 100.
const doePostsOver100 = posts.filter(
  (post) => post.author === 'John Doe' && post.views >= 100
);

// 17.2 С помощью "reduce" & "concat" мы склеим вместе все массивы, относящиеся к языкам этих постов вместе.
const doePostsTranslatedLangs = doePostsOver100.reduce((acc, cur) => {
  return acc.concat(cur.langs);
}, []);

console.log(doePostsTranslatedLangs);

// 17.3.0 Отлично, но нам ещё осталось избавиться от дубликатов. Для этого удобно использовать сет.
// const usedLanguages = Array.from(new Set(doePostsTranslatedLangs));

// 17.3.1 Либо можно записать тоже самое через spread-оператор.
const usedLanguages = [...new Set(doePostsTranslatedLangs)];

console.log(usedLanguages);

// 17.4 В итоге у нас получилось подробное описание со многими переменными, хотя мы могли бы описать это короче через цепочку методов.
const translatedLanguages = [
  ...new Set(
    posts
      .filter((post) => post.author === 'John Doe' && post.views >= 100)
      .map((post) => post.langs)
      .reduce((acc, cur) => acc.concat(cur))
  ),
];

console.log(translatedLanguages);
