// Имена функций начинаются
/**
 * show - показать
 * get - возвращать
 * calc - посчитать
 * create - создать
 * check - проверить
 */

// функция вывода сообщения
function showMessage() {
  console.log("Message");
}

showMessage();

// стрелочная функция
let getMessage = (textOne, textTwo) => textOne + "," + textTwo + "!";

//  return; вернет пустой результат

// Функции колбэки
function calcSum(numOne, numTwo, more, less) {
  let numSum = numOne + numTwo;
  if (numSum > 3) {
    more();
  } else {
    less();
  }
}

function showMoreMessage() {
  console.log("Больше трех");
}

function showLessMessage() {
  console.log("Меньше трех");
}

calcSum(1, 5, showMoreMessage, showLessMessage);

// рекурсия функция вызывает саму себя (пример функции где необходимо numOne умножить на numOne numTwo раз)
function calcSumRecursive(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calcSumRecursive(numOne, numTwo - 1);
  }
}
console.log(calcSumRecursive(2, 3));
