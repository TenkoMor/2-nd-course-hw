let a = 0
while (a<=1) {
    console.log("Привет")
    a++
}

let b = 1
while (b<=5) {
    console.log(b)
    b++
}

for (let c = 7; c <= 22 ; c++) {
    console.log(c)
}

const obj = {
    "Коля":'200',
    "Вася":'300',
    "Петя":'400'
}
for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`)
}

n=1000
let num=0
while (n>=50) {
    n /= 2
    num++
}
console.log(num + " - итераций")

let friday = 5 //prompt("Номер первой пятницы месяца")
for (let day = 1; day<=31 ; day++) {
    if (day == friday) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
        friday += 7
    }
    if (day == 31) {
        friday -= 31
    }
}
