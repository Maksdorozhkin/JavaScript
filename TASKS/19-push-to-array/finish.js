/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */
const myArray = [1, "xyz", null, true, { a: 1, b: 2 }, [1, 2, 3, 4, 5]];
console.log(myArray.length);
myArray.push("Maks");
console.log(myArray.length);
console.log(myArray);
