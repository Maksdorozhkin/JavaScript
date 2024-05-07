// Синтаксис объектов
let userInfo = {
  name: "Maks",
  age: 43,
  "likes JavaScript": true,
};

console.log(userInfo.name);
console.log(userInfo["likes JavaScript"]);

// вычисляемое имя свойств (внимательно с пробелами))
let firstPart = "likes";
let userInfoTwo = {
  name: "Maks",
  age: 43,
  [firstPart + " JavaScript"]: true,
};
console.log(userInfoTwo["likes JavaScript"]);

// Получаем значение свойства объекта
console.log(userInfoTwo.name);

// ВЛОЖЕННОСТЬ
let userInfoThree = {
  name: "Maks",
  age: 43,
  address: {
    city: "Dedovsk",
    country: "Russian Federation",
  },
};
console.log(userInfoThree.address.country);
console.log(userInfoThree.address);

// Свойство объекта из переменной (функции)
function makeUserInfo(name, age) {
  return {
    name: name,
    age: age,
    // другие свойства
  };
}
let user = makeUserInfo("Maks", 43);
console.log(user);

// ИЗМЕНЕНИЕ ОБЪЕКТОВ
let myBike = {};
myBike.model = "monster s4r";
console.log(myBike);
myBike.age = 2004;
console.log(myBike);

// УДАЛЕНИЕ СВОЙСТВА ИЗ ОБЪЕКТА
delete myBike.age;
console.log(myBike);

// ИЗМЕНЕНИЕ свойства объекта
myBike.model = "S4r";
console.log(myBike);

// КОПИРОВАНИЕ ссылки объекта
bike = myBike;
console.log(bike);
