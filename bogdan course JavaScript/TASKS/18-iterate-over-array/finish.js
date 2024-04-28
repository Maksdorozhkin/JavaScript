/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const myArray = [1, "xyz", null, true, { a: 1, b: 2 }, [1, 2, 3, 4, 5]];
myArray.forEach((element) => {
  console.log(element);
});

myArray.forEach((el) => console.log(el));

myArray.map((x) => console.log(x));
