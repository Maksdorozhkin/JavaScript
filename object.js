// Объекты, получение значений свойств

const myCity = {
    city: 'Dedovsk',
    popular: false,
    country: 'Russian Federation'
}
console.log(myCity.city)
console.log(myCity.popular)


// добавление новых свойств, можно изменять объект объявленный с помощью const, благодаря ссылочному типу данных  
myCity.urban = false
console.log(myCity)

// оператор удаления свойств в объекте 
delete myCity.urban
console.log(myCity)

// доступ к значению используя квадратные скобки
const countryPropertyName = 'country' // создаем переменную и присваиваем свойство объекта
myCity[countryPropertyName] = 'USA'  // меняем значение свойства с помощью переменной, используем квадратные скобки
console.log(myCity)


// ВЛОЖЕННЫЕ СВОЙСТВА 
const myBike = {
    bike: 'Ducati',
    info: {
        color: 'Red',
        engineVolume: 996 

    },
    isPopular: false
}
console.log(myBike.info.engineVolume)

// СОКРАЩЕННЫЙ ФОРМАТ ЗАПИСИ СВОЙСТВ, использование переменных
const name = "Maksim"
const postsQty = 23
// обычный формат
// const userProfile = {
// 	name: name,
// 	postsQty: postsQty,
// 	hasSignetArgument: false
// }
// сокращенный 
const userProfile = {
	name,
	postsQty,
	hasSignetArgument: false
}
console.log(userProfile)

// МЕТОДЫ - свойства объекта которые содержат функции
const myWorck = {
	company: "UMT",
	myPosition: function () {
		console.log('shift supervisor')
	}
}
myWorck.myPosition() // вызов метода
