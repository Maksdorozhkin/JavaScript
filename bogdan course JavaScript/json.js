// КОНВЕРТАЦИЯ JSON в объект javaScript
const post = '{"title":"My post","likesQty":5}'
let a = JSON.parse(post)
console.log(a)

// обратная конвертация

let b =JSON.stringify(a)
console.log(b)

// распарсили из строки в javascript объект
let c = JSON.parse(b)
console.log(c)
