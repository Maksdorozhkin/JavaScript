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
console.log(myArray);

//удаляет первый элемент по аналогии с pop
const removedElement1 = myArray.shift();
console.log(removedElement1);
