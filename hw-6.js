//task1
let str = "js"
console.log(str.toUpperCase())

//task2
const searchStart = (array, string) => {
    const arr = new Array()
    array.forEach((product) => {
        if (product.toLowerCase().startsWith(string.toLowerCase())) {
            arr.push(product)
        }
    })
    return arr
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'))
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'))
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'))

//task3
const num = 32.58884
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

//task4
console.log(Math.max(52, 53, 49, 77, 21, 32))
console.log(Math.min(52, 53, 49, 77, 21, 32))

//task5
const randomNumber = () => Math.round(Math.random() * (10 - 1)) + 1
console.log(randomNumber())

//task6
const generateArray = (max) => (
    [...new Array(Math.floor(max / 2))]
      .map(() => Math.round(Math.random() * max))
)
console.log(generateArray(7))

//task7
const randomNum = (min, max) => Math.round(Math.random() * (max - min)) + min
console.log(randomNum(4,7))

//task8
const date = new Date()
console.log(date)

//task9
let currentDate = new Date()
currentDate.setDate(73)
console.log(currentDate)

//task10
const date1 = {day: 'numeric', month: 'long', year: 'numeric'}
const day = {weekday: 'long'}
console.log(Intl.DateTimeFormat('ru-RU', date1).format(date))
console.log(`Дата: ${Intl.DateTimeFormat('ru-RU', date1).format(date)} - это ${Intl.DateTimeFormat('ru-RU', day).format(date)}
Время: ${Intl.DateTimeFormat('ru-RU', {timeStyle: 'medium'}).format(date)}`)