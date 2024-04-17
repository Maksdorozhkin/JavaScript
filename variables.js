// let присвоение переменной
let a = 10
a = 20 
console.log(a)
let b 
b = false
console.log(b)


let myName
console.log(myName)

myName = 'Maks' // присваиваем значение переменной 
console.log(myName)




// const присвоение констант значение присваивается в одной строке  
const c = 10
console.log(c)
// c = 20  // нельзя присваивать новые значения переменным объявленным с помощью const 
console.log(c)


// ссылочные типы данных

const objectA = {
    a: 10,
    b: true
}

// создадим копию переменной 
const copyOfA = objectA

// меняем свойство объекта через ссылку
copyOfA.a = 20
console.log(objectA.a)
// добавляем новое свойство объекту
copyOfA.c = 'abc'
console.log(objectA)
