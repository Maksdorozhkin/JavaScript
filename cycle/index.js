// Цикл for
// ! все циклы это инструкции
// пример цикла
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for для массивов (не рекомендуется использовать т.к есть встроенные методы у массивов)
const myArray = ["first", "second", "third"];
for (let i = 0; i < myArray.length; i++) console.log(myArray[i]);

//? что использовать вместо цикла (метод  foreach или map)
let res = myArray.forEach((a) => console.log(a));

//  или (перебор индекса элемента)
myArray.forEach((element, index) => {
  console.log(element, index);
});

// for in для объектов
const myObject = {
  x: 10,
  y: true,
  z: "abc",
};
for (const key in myObject) {
  console.log(key, myObject[key]);
}

// forEach для объектов, перебор свойств и значений
Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key]);
});

// перебор значений
Object.values(myObject).forEach((value) => {
  console.log(value);
});

// for in для массивов
const myNewArray = [true, 10, "abc", null];
for (const key in myNewArray) {
  console.log(myNewArray[key]);
}
