import { sum, mult } from "./moduleOne.mjs";
import { one as oneRenamed, two } from "./moduleOne.mjs";

const res1 = sum(10, 2);
console.log(res1);
console.log(sum(12, 15));

//Импорт нескольких переменных //! переименование импортированных переменных line 2
console.log(oneRenamed);
console.log(two);

//
console.log(sum(10, 10));
console.log(mult(10, 10));
