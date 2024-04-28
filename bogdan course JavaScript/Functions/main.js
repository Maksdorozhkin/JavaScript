// ФУНКЦИИ
// Пример создания простой функции
let a = 5;
let b = 3;
function sum(a, b) {
  const c = a + b;
  console.log(c);
}

sum(a, b);

a = 100;
b = 150;

sum(a, b);

// Объявление и вызов функции (если в теле функции нет return функция вернет undefined)
function myFun(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

console.log(myFun(10.2, 40.36));

// ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ, a и personeOne будут ссылаться на один объект (ВНУТРИ ФУНКЦИИ НЕ РЕКОМЕНДУЕТСЯ МЕНЯТЬ ВНЕШНИЕ ОБЪЕКТЫ)
const personOne = {
  name: "Maks",
  age: 43,
};

function increasePersonAge(a) {
  a.age += 1;
  return a;
}

increasePersonAge(personOne);
console.log(personOne.age);

// ДЕЛАЕМ КОПИЮ ОБЪЕКТА, ВНУТРИ ФУНКЦИИ создаем новый объект
function increasePersonAge2(b) {
  const updatePerson = { ...b }; //делаю копию объекта
  updatePerson.age += 1;
  return updatePerson;
}

const updatePersonOne = increasePersonAge2(personOne);
console.log(personOne.age);
console.log(updatePersonOne.age);

// КОЛБЭК ФУНКЦИЯ
function printMyName() {
  console.log("Maksim");
}
setTimeout(printMyName, 500); // вызывает колбэк функцию через 500 миллисекунд

// Значение параметров функции по умолчанию (в данном случае значение multiplier = 1)
function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}

console.log("");
console.log(multByFactor(10, 2));
console.log(multByFactor(5));

// функциональное выражение
const multByFactor1 = function (value, multiplier = 1) {
  return console.log(value * multiplier);
};

multByFactor1(6);

// arrow
const multByFactor2 = (value, multiplier = 1) => {
  return console.log(value * multiplier);
};
multByFactor2(10);

//  Интересный пример возвращает объект с текущей датой (неявный возврат объекта)
const newPost = (post, addetAT = Date()) => ({
  ...post,
  addetAT,
});
const firstPost = {
  id: 1,
  author: "Maks",
};

console.table(newPost(firstPost));

//  явный возврат объекта
const newPost1 = (post, addetAT = Date()) => {
  return console.table({ ...post, addetAT });
};

const firstPost1 = {
  id: 1,
  author: "Maks",
};

newPost1(firstPost1);
