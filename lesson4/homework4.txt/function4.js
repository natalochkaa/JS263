// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b) {
//     let res = a * b
//     return res
// }
// console.log(area(30, 40))
// - створити функцію яка обчислює та повертає площу кола (круга)  з радіусом r
// function circle(r){
//     return Math.PI * Math.pow (r,2)
// }
// console.log(circle(3))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(h,r){
//     return 2 * Math.PI * r * h
// }
// console.log(cylinder(3,5))
// - створити функцію яка приймає масив та виводить кожен його елемент
// function rules(a,b) {
//     document.write(`<h1> ${a} </h1>`)
//     document.write(`<h1> ${b} </h1>`)
//     document.write(`<h1> ${a} ${b} </h1>`)
// }
// rules(`hello`, `world`)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(p) {
//     document.write(`<p> ${p} </p>`)
// }
//
// paragraph(`Light from some stars takes so long to travel to our eyes that when you look at the star-speckled night sky you're actually peering deep into the past. NASA's Hubble Telescope can look as far back as 13 billion years ago.`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// document.write(`<ul>`)
// function rules(text) {
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
//     document.write(`<li> ${text} </li>`)
// }
// document.write(`</ul>`)
// rules(`NASA`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// document.write(`<ul>`)
// function rules(size,text) {
//     for(let i=0; i<size;i++){
//         document.write(`<li> ${text} </li>`)
//     }
// }
// document.write(`</ul>`)
// rules(3, `NASA`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let xxx=[40, `NASA`, true,false]
// document.write(`<ul>`)
// function rules (a){
//     for (let i = 0; i<a.length; i++){
//         document.write(`<li> ${a[i]} </li>`)
//     }
//     document.write(`</ul>`)
// }
// rules(xxx)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let xxx =[{id: 1,name:` Steve Jobs`,age:56},{id:2,name:` Elon Musk`,age:50},{id:3,name:`Mark Zuckerberg`,age:37},]
// function rules(xxx){
//     for (let item of xxx){
//         document.write(`<h1> ${item.id}. My name is - ${item.name}, I'm ${item.age}! </h1>`)
//     }
// }
// rules(xxx)