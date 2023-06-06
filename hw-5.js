//task1
const numbers1 = [1, 5, 4, 10, 0, 3]
for (let item of numbers1) {
    if (item == 10) {
        console.log(item)
        break
    }
}

//task2
const numbers2 = [1, 5, 4, 10, 0, 3]
console.log(numbers2.indexOf(4))

//task3
const numbers3 = [1, 3, 5, 10, 20]
console.log(numbers2.join(' '))

//task4
const numbers4 = []
for (let index = 0; index <= 2; index++) {
    numbers4[index] = []

    for (let i = 0; i <= 2; i++) {
    numbers4[index].push(1)
    }
}
console.log(numbers4)

//task5
const numbers5 = [1, 1, 1]
for (let i = 0; i <= 2; i++) {
    numbers5.push(2)
}
console.log(numbers5)

//task6
const numbers6 = [9, 8, 7, 'a', 6, 5]
numbers6.sort()
numbers6.pop()
console.log(numbers6)

//task7
const numbers7 = [9, 8, 7, 6, 5]
for (let item of numbers7) {
    if ((a = (prompt("Введите число"))) == item) {
        console.log(`Число ${a} содержится в массиве`)
        break
    } else {
        console.log(`Число ${a} не содержится в массиве`)
        break
    }
}

//task8
let word = 'abcdef'
const letters = word.split('')
letters.reverse()
console.log(letters.join(''))

//task9
const numbers8 = [[1, 2, 3,],[4, 5, 6]]
const numbers9 = Array().concat(numbers8[0]).concat(numbers8[1])
console.log(numbers9)

//task10
const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
)
const numbers10 = generateArray(10, 10)
console.log(numbers10)
console.log(numbers10.reduce((a, b) => a + b))

//task11
const numbers11 = generateArray(10, 10)
const squareArray = (array) => array.map(i => i**2)
console.log(squareArray(numbers11))

//task12
const getLengthWords = (array) => array.map(word => word.length)
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']))

//task13
const filterPositive = (array) => array.filter(num => num < 0)
console.log(filterPositive([-1, 0, 5, -10, 56]))
console.log(filterPositive([-25, 25, 0, -1000, -2]))
