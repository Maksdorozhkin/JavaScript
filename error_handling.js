// Обработка ошибок

// const fnWithError = () => {
//   throw new Error("Ошибка");// генерация ошибки
// };

// fnWithError();
// console.log("Continue...");

// TRY//CATCH обработка ошибок

const fnWithError = () => {
  throw new Error("Ошибка"); // генерация ошибки
};
try {
  fnWithError();
} catch (error) {
  console.error(error); // выводит целую ошибку
  console.log(error.message); // выводит только сообщение
}
console.log("Continue...");
