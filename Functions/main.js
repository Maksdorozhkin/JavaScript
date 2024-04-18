// ФУНКЦИИ
// Пример создания простой функции
let a = 5
let b = 3
function sum (a,b) {
	const c = a + b
	console.log(c)
}

sum(a,b)

a = 100
b = 150

sum(a,b)

// Объявление и вызов функции (если в теле функции нет return функция вернет undefined)
function myFun(a,b) {
	let c 
	a = a + 1
	c = a + b 
	return c
}

console.log(myFun(10.2, 40.36))

// ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ
 