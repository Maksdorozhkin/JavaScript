// Сортировка массивов
// Метод sort

// Сортировка слов
let arrOne = ["Maks", "Katia", "Andrew"];
console.log(arrOne.sort());

// Сортировка чисел (метод sort сортирует как строки поэтому нужно использовать свою функцию для сортировки)
let arrTwo = [8, 22, 1, 13]; //пример неправильной сортировки чисел
console.log(arrTwo.sort());

// функция сортировки
function compareNumeric(a, b) {
  // console.log(`Сравниваем ${a} и ${b}`);
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
  // return a - b;
}

console.log(arrTwo.sort(compareNumeric));

// Также можно решить всю задачу с помощью стрелочной функции
console.log(arrTwo.sort((a, b) => a - b));
