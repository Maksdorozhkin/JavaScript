// копируем весь массив
let arrOne = ["maks", "natasha", "aleks"];
let arrTwo = arrOne.slice();
console.log(arrTwo);

// копируем часть массива (начиная с 1 позиции копируем до последней не включая ее)
let arrThree = arrOne.slice(1, 2);
console.log(arrThree);

// начиная с предпоследней копируем до последней не включая ее
let arrFour = arrOne.slice(-2, -1);
console.log(arrFour);
