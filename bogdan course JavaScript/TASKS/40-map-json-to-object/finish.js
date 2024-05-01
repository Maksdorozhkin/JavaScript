/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
];

// мое решение задачи с помощью map
const newArray = postsJSON.map((x) => {
  return JSON.parse(x);
});
console.log(newArray[1].postId);
console.log(newArray[3].commentsQuantity);
console.log(newArray[newArray.length - 1].commentsQuantity);

// Пример вывода свойств объектов из массива в консоль
// var array = [
//   { key1: 'value1', key2: 'value2' },
//   { key1: 'value3', key2: 'value4' },

// console.log(array[1].key1);
