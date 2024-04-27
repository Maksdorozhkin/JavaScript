/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

let a = 1;

const messageIntervalId = setInterval(() => {
  console.log("Сообщение номер " + a);
  a += 1;
}, 2000);

setTimeout(() => clearInterval(messageIntervalId), 11000);

// решение задачи без использования setTimeout
let b = 1;
const mess = setInterval(() => {
  console.log("message " + b);
  {
    if (b >= 5) clearInterval(mess);
  }
  b += 1;
}, 2000);
