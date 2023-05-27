let password = 'пароль';
let check = prompt(String("Введите пароль"))
if (password === check) {
    alert("Пароль введен верно")
} else {
    alert("Пароль введен неправильно")
}

let num  = Number(prompt("Введите число"))
if ((num > 0) && (num < 10)) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

let d = 101
let e = 4
if ((d > 100) || (e > 100)) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

let monthNumber = Number(prompt("Введит номер месяца"))
switch (monthNumber) {
    case 1 :
        console.log("Зима");
        break;
    case 2 :
        console.log("Зима");
        break;
    case 3 :
        console.log("Зима");
        break;
    case 4 :
        console.log("Весна");
        break;
    case 5 :
        console.log("Весна");
        break;
    case 6 :
        console.log("Весна");
        break;
    case 7 :
        console.log("Лето");
        break;
    case 8 :
        console.log("Лето");
        break;
    case 9 :
        console.log("Лето");
        break;
    case 10 :
        console.log("Осень");
        break;
    case 11 :
        console.log("Осень");
        break;
    case 12 :
        console.log("Осень");
        break;
    default:
        console.log("Такого месяца не существует");
        break;
}