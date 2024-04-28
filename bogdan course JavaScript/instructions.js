// ИНСТРУКЦИИ примеры
let a;

const b = 5;

if (a > b) {
  console.log("a is larger");
}

for (let i = 0; i++; i < 5) {
  console.log(i);
}

// выражение - инструкция примеры
("abc");

a = a + 3;

c = a + b;

d = "Good " + "Evening";

// myFunctions(c, d);

// console.log("Hey");

// как отличить выражение от инструкции? (выражение можно передать в качестве аргумента функции, а инструкцию нет)
// function myFn(a) {
//   console.log(a);
// }

const b1 = true;
let c1 = 10;

function myFn(a) {
  console.log(a);
}

myFn((a = b1));
myFn(2 + 3);
// myFn(c = c1 * 2;)

myFn((c = c1 * 2));
// myFn(let d)
