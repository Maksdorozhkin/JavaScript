class Comment {
  constructor(text) {
    this.text = text;
    this.voteQty = 0;
  }
  upvote() {
    this.voteQty += 1;
  }
  static mergeComments(first, second) {
    //! static method
    return `${first} ${second}`;
  }
}

const firstComment = new Comment("First comment");

console.log(firstComment);

// проверка принадлежности экземпляра класса к определенному классу
// console.log(firstComment instanceof Comment);

// вызов методов
firstComment.upvote();
console.log(firstComment.voteQty);
firstComment.upvote();
console.log(firstComment.voteQty);

// проверка принадлежности свойств экземпляру объекта
firstComment.hasOwnProperty("text");
firstComment.hasOwnProperty("voteQty");
firstComment.hasOwnProperty("upvote");
firstComment.hasOwnProperty("hasOwnProperty");

// создание нескольких экземпляров классов
const secondComment = new Comment("Second comment");
const thirdComment = new Comment("Third comment");

// вызов методов
thirdComment.upvote();
console.log(thirdComment.voteQty);

// статические методы //! не наследуются экземплярами классов
Comment.mergeComments("First comment.", "Second comment");
// todo изучить самостоятельно метод reduce

// Расширение других классов используем метод reduce в массивах
class NumNumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}

const myArray = new NumNumbersArray(2, 8, 5);
console.log(myArray);
console.log(myArray.sum());
