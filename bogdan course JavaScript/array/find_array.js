// Поиск по массиву
let arr = ["maks", "katya", "andrew"];

// indexof ищет item начиная с индекса from, и возвращает индекс на котором был найден искомый, в противном случае возвращает -1 (lastindexoff - справа на лево)
console.log(arr.indexOf("maks"));
console.log(arr.indexOf("вася"));

// includes (тоже самое только возвращает true или false)
console.log(arr.includes("maks"));
console.log(arr.includes("maks", 2));

// find и findindex (поиск в массиве объектов с определенным условием), останавливает свою работу когда находит
let arrTwo = [
  { name: "Maks", age: 43 },
  { name: "Katya", age: "не скажу" },
  { name: "andrew", age: 55 },
];
let resultTwo = arrTwo.find(function (item, index, array) {
  return item.age === 43;
});

let resultThree = arrTwo.find((item) => item.age === 43);
console.log(resultTwo);
console.log(resultThree);

// findindex (возвращает индекс)
let resultFour = arrTwo.findIndex((item) => item.age === 55);
console.log(resultFour);

//  метод filter ищет все элементы на которых функция-колбэк вернет true
let resultFive = arrTwo.filter((item, index, array) => item.age >= 40);
console.log(resultFive);
