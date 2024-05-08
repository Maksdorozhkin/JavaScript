//  Тип данных символ
// Создаем символ
let id = Symbol("id");

let userInfo = {
  name: "Maks",
  age: 43,
  [id]: "скрытое значение",
};

console.log(userInfo);

/**
 * Основное применение символов это скрытые свойства объектов
 * Символы не появятся в for in
 */