// ДЕСТРУКТУРИЗАЦИЯ объектов
const userProfile = {
  firstName: "Maks",
  lastName: "Dorozhkin",
  age: 43,
};

const { firstName, lastName, age } = userProfile;
console.log(firstName, lastName, age);
console.log(lastName);
console.log(age);

// ДЕСТРУКТУРИЗАЦИЯ массивов
const fruits = ["Apple", "Banana", "Lime"];
const [fruitOne, fruitTwo] = fruits;
console.log(fruitOne, fruitTwo);

// Деструктуризация в функциях

const userInfo = ({ firstName, lastName }) => {
  //деструктуризация происходит в данной строке
  if (age > 40) {
    return `User ${firstName} ${lastName} age ${age}`;
  }
};
console.log(userInfo(userProfile));
