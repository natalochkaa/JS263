// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// document.getElementById(`formButton`).onclick = function () {
//     let f1 = document.forms.YourForm1.YourInput1.value;
//     let f2 = document.forms.YourForm1.YourInput2.value;
//     let f3 = document.forms.YourForm2.YourInput3.value;
//     let f4 = document.forms.YourForm2.YourInput4.value;
//     console.log(f1, f2, f3, f4);
// }
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання) (визнаю,що я це списала,бо дуже нервувалась)
// let YourInput5 = document.createElement(`input`);
// let YourInput6 = document.createElement(`input`);
// let YourInput7 = document.createElement(`input`);
// let formButton1 = document.createElement(`button`);
// YourInput5.classList.add(`characteristic2Task`);
// YourInput6.classList.add(`characteristic2Task`);
// YourInput7.classList.add(`characteristic2Task`);
// formButton1.classList.add(`buttonStyle`);
// formButton1.innerHTML = `Table`;
//
// document.body.append(YourInput5, YourInput6, YourInput7, formButton1);
//
//
// formButton1.addEventListener('click', function () {
//     let tr = YourInput5.value;
//     let td = YourInput6.value;
//     let Text = YourInput7.value;
//
//     function Table1(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid black';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid black';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid deeppink';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//
//     Table1(tr, td, Text);
// })

//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let arrFuck = [`Блядь`, `Блядство`, `Бля`, `Доёбывать(ся)`, `ахуеть`, `Въебать`, `Ебальник`, `Ебать`, `Ёб твою мать`, `Заебать`, `Заебаться`, `Заебись`, `Лярва`, `Наебать`, `Нахуя`, `Нехуй`, `Охуенно`, `Пиздец`, `Поебать`, `Похуй`, `Проебать`, `Расхуярить`, `Сука`, `Уебать`, `Хуёво`, `Хуй`, `Шароёбиться`];
// let inp = document.createElement(`input`);
// let btn = document.createElement(`button`);
// btn.innerHTML = `Ну шо?`;
// document.body.append(inp, btn);
// btn.onclick =  function () {
//     let words = inp.value;
//     for (let item of arrFuck) {
//         if (item  === words) {
//             alert(`хуй чоло`);
//         }
//         else {
//             alert( `you молодець`);
//         }
//     }
// }
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку;

let arrFuck = [`Блядь`, `Блядство`, `Бля`, `Доёбывать(ся)`, `ахуеть`, `Въебать`, `Ебальник`, `Ебать`, `Ёб твою мать`, `Заебать`, `Заебаться`, `Заебись`, `Лярва`, `Наебать`, `Нахуя`, `Нехуй`, `Охуенно`, `Пиздец`, `Поебать`, `Похуй`, `Проебать`, `Расхуярить`, `Сука`, `Уебать`, `Хуёво`, `Хуй`, `Шароёбиться`];
let inp = document.createElement(`input`);
let btn = document.createElement(`button`);
btn.innerHTML = `Ну шо?`;
document.body.append(inp, btn);
btn.onclick =  function () {
    let words = inp.value;
    for (let item of arrFuck) {
        if (words.includes(item)) {
            alert(`все одно молодець`);
        }
        else {
            alert( `you молодець`);
        }
    }
}