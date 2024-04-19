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

// СОКРАЩЕННЫЙ ФОРМАТ ЗАПИСИ МЕТОДОВ, убираем ключевое слово function просто ставим скобки после названия свойства 
const myWorckUMT = {
	company: "UMT",
	myPosition() {  // скобки означают что это функция
		console.log('shift supervisor')
	}
}
myWorckUMT.myPosition()

// КАК ИЗБЕЖАТЬ МУТАЦИЙ ОБЪЕКТОВ используем Object.assign({}, person) создаем новый объект на основании корневых свойств person (если нет вложеных объектов)
const person = {
	name: "Maks",
	age: 43
}

const person2 = Object.assign({}, person)
person2.age = 44
console.log(person2.age)
console.log(person.age)


// вариант 2 немного проще используем { ...moto }, но по прежнему мутируется вложенный объект
const moto = {
	model: "Monster S4R",
	age: 2004,
	characteristics: {
		volumeEngine: 996,
		color: 'Red',
		basrer: true
	}
}

const myMoto = { ...moto }
myMoto.characteristics.maxspeed = 240
console.log(moto)
console.log(myMoto)
myMoto.characteristics.maxspeed = 220
console.log(moto)
myMoto.age = 2003
console.log(moto)

// вариант 3, позволяет польностью избежать мутаций включая вложенные объекты JSON.parse(JSON.stringify()) 
const newPerson = {
	name: 'Andrew',
	age: 100
}

const newPerson2 = JSON.parse(JSON.stringify(newPerson))

newPerson2.name = 'Katya'

console.log(newPerson)
console.log(newPerson2)
