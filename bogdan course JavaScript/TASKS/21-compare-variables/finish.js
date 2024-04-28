/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10;
let myVariable2 = "5";

// Напишите код здесь
if (myVariable1 != Number) {
  myVariable1 = Number(myVariable1);
}
if (myVariable2 != Number) {
  myVariable2 = Number(myVariable2);
}
if (myVariable1 <= myVariable2) {
  console.log(true);
} else {
  console.log(false);
}

//! красивое решение
console.log(parseInt(myVariable1) <= parseInt(myVariable2));
// * еще пример преобразования строки в число с помощью +
console.log(+myVariable2);

myVariable1 = "20";
myVariable2 = 100;

// Напишите код здесь
if (myVariable1 != Number) {
  myVariable1 = Number(myVariable1);
}
if (myVariable2 != Number) {
  myVariable2 = Number(myVariable2);
}
if (myVariable1 <= myVariable2) {
  console.log(true);
} else {
  console.log(false);
}

//! красивое решение
console.log(parseInt(myVariable1) <= parseInt(myVariable2));
