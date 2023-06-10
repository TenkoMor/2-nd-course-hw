//task1
const less = (a, b) => {
    if (a >= b) {
        return b
    } else {
        return a
    }
}
console.log(less(2, 6))

//task2
const evenOdd  = (a) => {
    if (a % 2 == 0) {
        return "Число чётное"
    } else {
        return "Число нечётное"
    }
}
console.log(evenOdd(7))

//task3.1
const square1 = (a) => console.log(a**2)
square1(2)

//task3.2
const square2 = (b) => {
    let result = b**2 
    return result
}
console.log(square2(4))

//task4 
const sayHello = (a = prompt("Сколько вам лет?")) => {
    if ((a >= 0) && (a <= 12)) {
        console.log("Привет, друг!")
    } else if (a >= 13) {
        console.log("Добро пожаловать!")
    } else {
        console.log("Вы ввели неправильное значение")
    }
}
sayHello()

//task5
const check = (a, b) => {
    let num1 = isNaN(a)
    let num2 = isNaN(b)
    if ((num1 == false) && (num2 == false)) {
        let result = a*b
        return result 
    } else {
        return "Одно или оба значения не являются числом"
    }
}
console.log(check(3, "rr"))

//task6
const cube = (a = prompt("Сколько вам лет?")) => {
    if (isNaN(a)) {
        return 'Переданный параметр не является числом'
    } else {
        let result = a**3
        return `${a} в кубе равняется ${result}`
    }
}
for (let c = 0; c <= 10 ; c++) {
    console.log(cube(c))
}

//task7
function getRectangleArea() {
    return Math.PI * (this.radius**2)
}
function getRectanglePerimeter() {
    return  2 * Math.PI * this.radius
}
const circle1 = {
    radius: 10, 
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
}
const circle2 = {
    radius: 12,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
}
console.log(circle2.getArea())
console.log(circle2.getPerimeter())