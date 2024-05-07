//  Вызов элементов массива
let arrTwo = [
  "Maks",
  {
    type: "JS",
    age: 36,
  },
  true,
  function () {
    console.log("Hi Maks");
  },
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type);
console.log(arrTwo[2]);
// Вызов функции внутри массива
arrTwo[3]();

// многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
console.log(matrix[0][1]);
