/**
 * Функция конструктор позволяет создать несколько однотипных объектов
 * Имя функции должно начинаться с большой буквы, вызывается с помощью оператора new
 * */

function UserInfo(name, age) {
  //this = {} // создается пустой объект неявно
  this.name = name;
  this.age = age;
  // return this // возвращается объект неявно
}

console.log(new UserInfo("Maksim", 43));
console.log(new UserInfo("Andrew", 60));
