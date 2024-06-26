//  Оператор не (!)
console.log(!10);
console.log(!0);
console.log(!"abc");
console.log(!"");
console.log(!true);
console.log(!undefined);

console.log("");
// оператор отрицания отрицания (!!)
console.log(!!10);
console.log(!!0);
console.log(!!"abc");
console.log(!!"");
console.log(!!true);
console.log(!!undefined);

let a; // пустая переменная
console.log(!!a);

console.log("");
// операторы короткого замыкания, оператор и (&&)
// выражение 1 && выражение 2 - если выражение 1 ложно то выражение 2 игнорируется(возвращает ложное выражение)
console.log(0 && "Maks");

// ОПЕРАТОР ИЛИ (||)
// если выражение 1 истинно то выражение 2 игнорируется (возвращает результат истинного выражения)
console.log("Maks" || "");

// трюк с оператором &&
let b = 10;
b && console.log("Выполнено");

let c;
c && console.log("Выполнено");

//  оператор разделения объекта на свойства (...) см. вывод
const button = {
  width: 200,
  text: "Buy",
};

const redButton = {
  ...button, // применение оператора
  color: "red",
};
console.table(redButton);

// объединение объектов с помощью оператора разделения )) (...)
const buttonInfo = {
  text: "Buy",
};

const buttonStyle = {
  color: "yellow",
  width: 200,
  height: 300,
};

const newButton = {
  ...buttonInfo,
  ...buttonStyle,
};
console.table(newButton);
