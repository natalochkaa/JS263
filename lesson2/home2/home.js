// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю чи четверту частину години).
// let time = +prompt(`щоб дізнатись відповідь, напиши від 0 до 59`)
// console.log(time)
// if( time>=0 && time<=15){
//     document.write('<h2>число до 15 припадає на першу частину години</h2>')
// } else if (time>=15 && time<=30){
//     document.write('<h2>число до 30 припадає на другу частину години</h2>')
// } else if (time>=30 && time<=45){
//     document.write('<h2>число до 45 припадає на третю частину години</h2>')
// } else if (time>=45 && time<=59){
//     document.write('<h2>число до 59 припадає на четверту частину години</h2>')
// }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//  let day = +prompt(`щоб дізнатись відповідь, напиши від 1 до 31`)
// console.log(day)
// if( day>=1 && day<=11){
//     document.write('<h2>це число припадає на першу половину місяця</h2>')
// } else if (day>=12 && day<=21){
//     document.write('<h2>це число припадає на другу половину місяця</h2>')
// } else if (day>=22 && day<=31){
//     document.write('<h2>це число припадає на третю половину місяця</h2>')
// }
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

//  let test = ""
// let num = 10
// if(num === 100){test=`Неправильно`}
// else {test = `Вірно`}
// console.log(test)

// let num = 10
// let test = num === 100 ? `Неправильно` : `Вірно`
// console.log(test)
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

//  let a = +prompt(`перевіримо: 1, 0, -3`)
// console.log(a)
// if (a===0) { console.log`Невірно`}
// else {console.log`Вірно`}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let key = prompt(`РОЗКЛАД ЗАНЯТЬ НА ПЕРШИЙ СЕМЕСТР НАВЧАЛЬНОГО РОКУ
// ДЛЯ СТУДЕНТІВ ФАКУЛЬТЕТУ ЖУРНАЛІСТИКИ (ДЕННЕ НАВЧАННЯ)
// введіть цифру від 1 до 5`)
// switch (key) {
//     case`1`:
//         document.write(`<h1> ПОНЕДІЛОК: </h1>
// <p style="font-size: 20px"> <h2> 1. Зарубіжна журналістика: історія, теорія, сучасна практика</h2>
// <br>Лекція: Проф. Лось Й.Д.   ауд.303
// <h2> 2. Теорія і методика журналістської творчості</h2>
// <br>Лекція: доц. Паславський І.І.  ауд.350
// <h2> 3. Медіаграмотність: технології та практичне застосування</h2>
// <br> Войтович Н.О. ауд.350
// </p>`)
//         break
//     case`2`:
//         document.write(`<h1> ВІВТОРОК: </h1>
// <p > <h2> 1.Медіариторика в ЗМІ</h2>
// <h2> 2. Історія української журналістики</h2>
// <h2> 3. Медіаграмотність: технології та практичне застосування</h2>
// </p>`)
//         break
//     case`3`:
//         document.write(`<h1> СЕРЕДА: </h1>
// <p > <h2> ВИБІРКОВІ ДИСЦИПЛІНИ:
// <br>а) Соціально-комунікаційні технології у розвитку людства
// <br>б) Історія видавничої справи та редагування</h2>
// <h2> 2. Соціально-комунікаційні технології у розвитку людства</h2>
// </p>`)
//         break
//     case`4`:
//         document.write(`<h1> ЧЕТВЕР: </h1>
// <p > <h2> ВИБІРКОВІ ДИСЦИПЛІНИ:
// <br>а) Деонтологія журналістики
// <br>б) Історія світової культури</h2>
// <h2> 2. Психологія творчості</h2>
// <h2> 3. Деонтологія журналістики</h2>
// </p>`)
//         break
//     case`5`:
//         document.write(`<h1> П'ЯТНИЦЯ: </h1>
// <p > <h2> ДИСЦИПЛІНИ СПЕЦІАЛІЗАЦІЇ ЗА ВИБОРОМ</h2>
// </p>`)
//
//         break
//     default:
//         document.write("<h1>ТИ СЬОГОДНІ ВІЛЬНИЙ!</h1>")
// }
// - Потрібно визначити високосний рік чи ні. Високосні роки діляться націло на 4.

// let x = +prompt('Визначаємо високосний рік чи ні' )
// if (x % 4===0){
//     document.write(`Високосний`)
// } else {
//     document.write(`такий як завжди`)
// }
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let w = prompt(`Яка «офіційна» назва JavaScript?`)
// console.log(w)
// if(w==="ECMAScript"){
//     document.write(`Правильно!`)
// }
// else {
//     document.write(`Не знаєте? ECMAScript!`)
// }