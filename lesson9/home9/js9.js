// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//----------------------------------------------------------------------------------------------------------------------
let div = document.createElement(`div`);
div.classList.add(`wrap`, `collapse`, `alpha`, `beta`);
div.innerText = `Національне управління з аеронавтики і дослідження космічного простору — агентство уряду США, засноване 1958 року для досліджень у галузі аеронавтики й космічних польотів. Штаб-квартира NASA розташована у Вашингтоні;`;
document.body.appendChild(div);
console.log(div);
let divClone = div.cloneNode(true);
document.body.appendChild(divClone);
console.log(divClone);
//======================================================================================================================
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//----------------------------------------------------------------------------------------------------------------------
let container = document.getElementsByClassName(`menu`)[0];
let infoMenu = ['Main', 'Products', 'About us', 'Contacts'];
for (let item of infoMenu) {
    let createLi = document.createElement(`li`);
    createLi.innerText = item;
    container.append(createLi);
}
//======================================================================================================================
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//----------------------------------------------------------------------------------------------------------------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// for (let item of coursesAndDurationArray) {
//     let createDiv = document.createElement(`div`);
//     createDiv.innerText = `Title - ${item.title}, monthDuration - ${item.monthDuration}`;
//     document.body.appendChild(createDiv);
// }
//======================================================================================================================
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//----------------------------------------------------------------------------------------------------------------------
for (let value of coursesAndDurationArray) {
    let createDiv = document.createElement(`div`);
    createDiv.classList.add(`item`);
    let h1 = document.createElement(`h1`);
    h1.classList.add(`heading`);
    let p = document.createElement(`p`);
    p.classList.add(`description`);
    h1.innerText = value.title;
    p.innerText = value.monthDuration;
    createDiv.append(h1, p);
    document.body.appendChild(createDiv);
}
