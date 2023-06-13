//game1 - month by number
const month = (monthNumber = Number(prompt("Введит номер месяца"))) => {
    if ((monthNumber == 12) || (monthNumber >= 1) && (monthNumber <= 2)){
        return "Зима" 
    } else if ((monthNumber >= 3) && (monthNumber <= 5)){
        return "Весна"
    } else if ((monthNumber >= 6) && (monthNumber <= 8)){
        return "Лето"
    } else if ((monthNumber >= 9) && (monthNumber <= 11)){
        return "Осень"
    } else {
        return "Такого месяца не существует"
    }
}

//game2 - memorize the words
let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
console.log(array)
const words = () => {
    array = array.sort(() => Math.random() - 0.5);
    alert(array)
    answer1 = array[0]
    answer2 = array[6]
    const userAnswer1 = prompt('Чему равнялся первый элемент массива?')
    const userAnswer2 = prompt('Чему равнялся второй элемент массива?')
    if ((answer1.toLowerCase() === userAnswer1.toLowerCase()) && (answer2.toLowerCase() === userAnswer2.toLowerCase())) {
        alert('Вы угадали оба элемента!!!!')
    } else if ((answer1.toLowerCase() === userAnswer1.toLowerCase()) || (answer2.toLowerCase() === userAnswer2.toLowerCase())) {
        alert('Вы были близки к победе!')
    } else {
        alert('Вы не угадали ни одного элемента:(')
    }
}