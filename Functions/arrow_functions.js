// Стрелочные функции (анонимная)
(a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

// можно присвоить переменной (работает как обычная только без ключевого слова functions), но предотвращает присвоение нового значения переменной
const arrowFunctions = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return console.log(c);
};

arrowFunctions(2, 2);

// еще пример использования
setTimeout(() => {
  console.log("Отложенное сообщение");
}, 1000);

// Сокращение синтаксиса стрелочных функций
// если у функции один параметр то можно без круглых скобок
const arrowFunction1 = (a) => {
  let c;
  c = a + 1;
  return console.log(c);
};
arrowFunction1(2);

// фигурные скобки можно не применять если у функции всего одно выражение
const arrowFunctions2 = (a, b) => a + b;
console.log(arrowFunctions2(2, 2));
