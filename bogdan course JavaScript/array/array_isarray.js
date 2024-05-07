// Проверка Array.isArray()
// Массивы основаны на объектах и как узнать где массив а где нет
let obj = {};
let arr = [];
console.log(typeof obj);
console.log(typeof arr);

console.log(Array.isArray(arr));

if (Array.isArray(arr)) {
  console.log("Это массив");
} else {
  console.log("Это не массив");
}
