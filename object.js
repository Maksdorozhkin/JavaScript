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
