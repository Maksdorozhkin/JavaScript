// ПРОВЕРКА есть ли свойство у объекта
let myBike = {
  model: "Monster S4r",
  age: 2004,
  "my new bike": {
    model: "Diavel",
    color: "red",
  },
};

if (myBike.model) {
  //true или false
  console.log(myBike.model);
}

// in оператор (имя указываем в кавычках)
if ("age" in myBike) {
  console.log(myBike.age);
}

// опциональная цепочка - проверка с помощью вопросительного знака
console.log(myBike?.["my new bike"]?.model); // если нет вернет undefined
