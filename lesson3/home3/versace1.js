// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let target = [68,90,87,65,43]
// console.log(target)
// let versace = ["barbie", "doll", "qwerty","lady","snake"]
// console.log(versace)
// let roll = [99,"book",75,true,false]
// console.log(roll)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//      let world = []
// world[0] = "From Australia to USA"
// world[1] = "And from Italy to Germany"
// world[2] = "And from San Marino to Canada"
// world[3] = "He is our biggest star"
// console.log(world)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let xxx=0; xxx<10; xxx++){
//     document.write(`<div>Lucky guy</div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for(let xxx=1; xxx<=10; xxx++){
//     document.write(`<div> ${xxx} Lucky guy </div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let xxx=0
// while (xxx<=20){
//     document.write(`<h1>Modern Talking</h1>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//  let xxx=1
// while (xxx<=20){
//     document.write(`<h1> ${xxx}Modern Talking</h1>`)
//     xxx++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let www = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// for(let www=0;www<10;www++){
//     console.log(www)
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let target = ["Love is like the ocean", "Burning in devotion", "When you go, go, go, oh no", "Feel my heart is burning", "When the night is turning", "I will go, go, go, oh no", "No face, no name, no number", "No face, no name, no number", "No face, no name, no number", "No face, no name, no number",]
// console.log(target)
// for (let i=0;i< target.length; i++ ){
//     document.write(`<h2>${target[i]}`)
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let ttt = ["Best ", "Disco ", "Songs ", "Of ", "All ", "Time", 1990, 1991 , 1992, 1993]
// console.log(ttt)
// for (let i=0;i< ttt.length; i++ ){
//     document.write(`<h2>${ttt[i]}`)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let  zzz = [ 1990, 1991 , 1992, 1993,"Best ", "Disco ", "Songs ",true,false,true]
// for (let i=0;i< zzz.length; i++ ){
// if( typeof zzz [i] === `boolean`){
//     console.log(zzz[i])
// }}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let  zzz = [ 1990, 1991 , 1992, 1993,"Best ", "Disco ", "Songs ",true,false,true]
// for (let i=0;i< zzz.length; i++ ){
//     if( typeof zzz [i] === `number`){
//         console.log(zzz[i])
//     }}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let  zzz = [ 1990, 1991 , 1992, 1993,"Best ", "Disco ", "Songs ",true,false,true]
// for (let i=0;i< zzz.length; i++ ){
//     if( typeof zzz [i] === `string`){
//         console.log(zzz[i])
//     }}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let www = []
// www [0] = 1990
// www [1] = 1991
// www [2] = 1992
// www [3] = 1993
// www [4] = "Best "
// www [5] = "Disco "
// www [6] = "Songs "
// www [7] = true
// www [8] = false
// www [9] = true
// console.log(www)
// for (let i = 0; i < www.length; i++) {
//     console.log(www[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let xxx=1;xxx<=10;xxx++){
//     console.log(xxx)
//     document.write(xxx)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let xxx=0;xxx<100;xxx++){
//     console.log(xxx)
//     document.write(xxx)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//  for(let www=1;www<=100;www+=2){
//      console.log(www)
//      document.write(www)
//  }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let www=0;www<=100;www++){
//     if(www%2===0 && www!==0){
//         console.log(www)
//         document.write(www)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for(let www=0;www<100;www++){
//     if(www % 2===1 && www!==0){
//         console.log(www)
//         document.write(www)
//     }
// }