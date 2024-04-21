//  ARRAY
const myArray = [1, 2, 4];
console.log(myArray);

// пример создания массива путем создания экземпляра класса Array
const myArray2 = new Array(1, 2, 3);
console.log(myArray2);

//  добавление новых элементов
myArray[3] = true;
console.log(myArray);
console.log(myArray.length);

// методы массивов
myArray.push(5); //добавляет
console.log(myArray);

const removedElement = myArray.pop(); //удаляет элемент с конца возвращая его, в данном случае присваивается переменной
console.log(myArray);
console.log(removedElement);

// добавление в начало массива
myArray.unshift(true);
myArray.unshift("abc");

//удаляет первый элемент по аналогии с pop
const removedElement1 = myArray.shift();
console.log(removedElement1);

//метод foreach перебирает массив ( возвращает undefined)
console.log(myArray);
myArray2.forEach((el) => console.log(el * 3)); // данный код умножает каждый элемент на 3 и делает перебор при этом не меняет оригинальный массив
console.log(myArray);

const res = myArray.forEach((zx) => console.log(zx)); // простой перебор
console.log(res);

// метод map (возвращает новый массив)
const returnMyArray = myArray2.map((x) => x * 10); // перебирает элементы массива и в данном примере применяет стрелочную функцию (возвращает новый массив)
console.log(returnMyArray);

// используем функциональное выражение вместо стрелочной функции
const returnMyArray3 = myArray2.map(function (x) {
  return x * 10;
});
console.log(returnMyArray3);

const newReturnMyArray = myArray2.map((x) => {
  return x * 20; // без return вернет undefined (неявно возвращать можно только в стрелочной функции)
});
console.log(newReturnMyArray);
