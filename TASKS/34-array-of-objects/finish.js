/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const myArray = [
  {
    carBrand: "BMW",
    price: 100000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Audi",
    price: 90000,
    isAvailableForSale: false,
  },
  {
    carBrand: "Porshe",
    price: 300100,
    isAvailableForSale: true,
  },
];

myArray.push({
  carBrand: "Lambo",
  price: 4300000,
  isAvailableForSale: true,
});

console.log(myArray);
