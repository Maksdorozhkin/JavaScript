/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

let a = "abc",
  b = 1,
  c = true,
  d = null,
  e = undefined,
  f = {
    a: 1,
    b: "abc",
  },
  j = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof j);
