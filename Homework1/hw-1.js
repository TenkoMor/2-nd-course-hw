let a = 10
alert(a);
a = 20
alert(a);

let year = 2007
alert('Год выпуска первого iPhone ' + year);

let name1 = 'Brendan Eich'
alert('Имя создателя языка JavaScript - ' + name1);

let number1 = 10
let number2 = 2
alert(number1 + number2)
alert(number1 - number2)
alert(number1 * number2)
alert(number1 / number2)

let result = number2 ** 5
alert(result);

a = 9
let b = 2
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

let age = Number(prompt('Сколько вам лет?'))
alert(age)

const user = {
    name: 'Tartalini',
    age: 44,
    isAdmin: true
}
user['city of residence'] = 'USA'
user.age = 35
delete user['city of residence']

let info = prompt("Что вы хотите узнать о пользователе?", "name")
alert(user[info])

let userName = prompt('Как вас зовут?')
alert(`Привет, ${userName}!`)
