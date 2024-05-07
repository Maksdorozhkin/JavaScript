// ДУБЛИРОВАНИЕ объекта
// Object.assign(куда(объект), что(свойство 1), что(свойство 2))

let userInfo = {
  name: "Толик",
  age: 18,
};

let user = Object.assign({}, userInfo);

user.age = 60;
console.log(user);
