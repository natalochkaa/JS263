// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let number = +prompt('введіть число №1')
// let num = +prompt(`введіть число №2`)
// if (number>num){
//     console.log(number)
// }
// else if(number<num){
//     console.log(num)
// }
// else if (number===num){
//     console.log(`введені рівні числа`)
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let app = +prompt(`Дізнайся в якому під'їзді знаходиться квартира`)
// if( app>=1 && app<=20){
//     document.write("<h2>Квартира знаходиться у першому під'їзді </h2>")
// } else if (app>=21 && app<=48){
//     document.write("<h2>Квартира знаходиться у другому під'їзді</h2>")
// } else if (app>=49 && app<=90){
//     document.write("<h2>Квартира знаходиться у третьому під'їзді</h2>")
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt("напиши цифру")
// if (number === 10) {
//     console.log(`ВІРНО`)
// } else {
//     console.log("НЕВІРНО")
// }
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else

// let x = ""
// if ( x === `number`) {
//     document.write("1")
// } else if (x === "string") {
//     document.write("2")
// } else if (x === "boolean") {
//     document.write("3")
// } else if (x === "object") {
//     document.write("4")
// } else {
//     document.write("що це?")
// }
// console.log(typeof x)

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let weather = +prompt("чи ми йдемо сьогодні в OKTEN на навчання?")
// if (weather >=+10 && weather<=+22){
//     document.write(`ми йдемо ВЧИТИСЯ`)
// }
// else {
//     document.write("сидимо вдома і вчимося ОНЛАЙН")
// }


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let xxx = +prompt("напиши від 1 до 5 і ВИГРАЙ ПРИЗ")
// if (xxx ===1){
//     document.write("<h1>УРА! ВИ ВИГРАЛИ ПОДОРОЖ ДО ІСЛАНДІЇ</h1>")
// }
// else if(xxx===2){
//     document.write("<h1>Зірочку з неба :D</h1>")
// }else if(xxx===3){
//     document.write("<h1>повернутись у дитинство</h1>")
// }else if(xxx===4){
//     document.write("<h1>Mercedes-Benz GLE</h1>")
// }else if(xxx===5){
//     document.write("<h1>1000000000000000000 £££</h1>")
// }
// else{
//     document.write("<h1>шось ти взагалі не туди</h1>")
// }

let xxx = +prompt("напиши від 1 до 5 і ВИГРАЙ ПРИЗ")
switch (xxx){
    case 1:
        document.write("<h1>УРА! ВИ ВИГРАЛИ ПОДОРОЖ ДО ІСЛАНДІЇ</h1>")
    break
    case 2:
        document.write("<h1>Зірочку з неба :D</h1>")
    break
    case 3:
        document.write("<h1>повернутись у дитинство</h1>")
    break
    case 4:
        document.write("<h1>Mercedes-Benz GLE</h1>")
    break
    case 5:
        document.write("<h1>1000000000000000000 £££</h1>")
    break
    default:
        document.write("<h1>шось ти взагалі не туди</h1>")

}