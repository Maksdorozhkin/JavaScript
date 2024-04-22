// Пример инструкции if c оператором отрицания
let val = 10;
if (val > 5) {
  val += 20;
}

console.log(val);

// c оператором отрицания !undefined === true
const person = {
  age: 20,
};

if (!person.name) {
  console.log("Name undefined)");
}

// if else
if (val < 5) {
  val += 10;
} else {
  val -= 35;
}
console.log(val);

// IF ELSE IF (можно использовать просто if отдельно)

// if (условие1) {
//   выполняется если условие1 правдиво
// } else if (условие2) {
//   выполняется если условие2 правдиво
// } else {
//   выполняется если условие1 и условие2 ложно
// }

const age = 17;
if (age > 18) {
  console.log("Is adult");
} else if (age >= 12) {
  console.log("Is teenager");
} else {
  console.log("Is child");
}

if (age >= 18) {
  console.log("Is adult");
}
if (age >= 12 && age < 18) {
  console.log("Is teenager");
}
if (age < 12) {
  console.log("Is child");
}

// использование if в функциях

const sumPositiveNumber = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the argument is not a number";
  }
  if (a <= 0 || b <= 0) {
    return "Number is not positive";
  }
  return a + b;
};
console.log(sumPositiveNumber(2, 10));

// ИНСТРУКЦИЯ SWITCH

// switch (выражение) {
//   case A:
//     действия если выражение === А
//     break
//   case B:
//     действия если выражение === B
//     break
//   default:
//     действия по умолчанию
// }

const month = 12;

switch (month) {
  case 12:
    console.log("December");
    break;
  case 1:
    console.log("Январь");
    break;
  case 2:
    console.log("Февраль");
    break;
  default:
    console.log("Это не зимний месяц");
}
