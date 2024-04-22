// Тернарный оператор конструкция с тернарным оператором - выражение (возвращает значение)
// * простой тернарный оператор (принцип такой если value true то выводит первый console.log)
const value = 11;
value ? console.log(true) : console.log(false);

// * пример вызова функции в конструкции с тернарным оператором
// const value2 = 25;
// value && value2 ? myFunctions(value, value2) : myFunctions2();

// пример 3
let myNum = 43;
console.log(myNum >= 0 ? myNum : -myNum);

myNum = -5;
const res = myNum >= 0 ? myNum : -myNum;
console.log(res);
