// сложим все элементы массива (previousValue 0 в данном случае - это аккумулятор, если не указать значение то оно будет равно первому элементу)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reduceValueOne = arr.reduce(
  (previousValue, item, index, array) => item + previousValue,
  0
);
console.log(reduceValueOne);
