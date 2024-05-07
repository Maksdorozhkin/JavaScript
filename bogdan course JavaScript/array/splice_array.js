// удаление элементов
let arrOne = ["maks", "natasha", "aleks"];
// начиная с первой позиции удаляем один элемент
arrOne.splice(1, 1);
console.log(arrOne);

let arrTwo = ["maks", "natasha", "aleks"];
// удаляем элемент и возвращаем его в переменнуую
let removedElem = arrTwo.splice(-1, 1);
console.log(removedElem);
console.log(arrTwo);

// заменяем элемент
let arrThree = ["maks", "natasha", "aleks"];
arrThree.splice(1, 1, "Katya");
console.log(arrThree);

// добавление элементов
let arrFour = ["maks", "natasha", "aleks"];
// начиная с первой позиции добавляеем два элемента (перед наташа)
arrFour.splice(1, 0, "Tolik", "Roody");
console.log(arrFour);
