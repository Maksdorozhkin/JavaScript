/* 
Преобразование массивов
Методы Split и Join
*/
// создаем массив из строки
let str = "Ваня,Максим,Андрей,Толик";
let arr = str.split(",");
console.log(arr);

let arrTwo = str.split(",", 2); //можно ограничить количество объектов
console.log(arrTwo);

// Получение строки из массива
let strTwo = arr.join(", ");
console.log(strTwo);
