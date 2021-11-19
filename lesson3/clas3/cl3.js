// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// console.log(xxx)

//     1. перебрати його циклом while

// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// let i =0
// while (i<xxx.length){
//     let target = xxx[i]
//     console.log(target)
//     i++
// }
// ЗВОРОТНІЙ ЦИКЛ(9)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// let i=xxx.length
// while (i>=0){
//     console.log(xxx[i])
//     i--
// }


//     2. перебрати його циклом for

// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for(let i =0; i<xxx.length;i++)
//     console.log(xxx[i])

// ЗВОРОТНІЙ ЦИКЛ(9)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = xxx.length - 1; i >= 0; i--) {
//     const xxx1 = xxx[i];
//     console.log(xxx1)
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// let i =0
// while (i<xxx.length){
//     if(i%2 )
//     console.log(xxx[i])
//     i++
// }

// ЗВОРОТНІЙ ЦИКЛ(9)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// let i=xxx.length
// while (i>=0){
//     if(i%2 )
//     console.log(xxx[i])
//     i--
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for(i=0;i<xxx.length; i++){
//     if(i%2)
//         console.log(xxx[i])
// }
// ЗВОРОТНІЙ ЦИКЛ(8)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = xxx.length - 1; i >= 0; i--) {
//     if(i%2 ===0)
//     console.log(xxx[i])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// let i =0
// while (let i<xxx.length){
//     if(i%2 ===0){
//         console.log(xxx[i])
//     }
//     i++
// }
// // ЗВОРОТНІЙ ЦИКЛ(9)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// let i=xxx.length
// while (i>=0){
//     console.log(xxx[i])
//     i--
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for(let i=0; i<xxx.length; i++){
//     if(i%2 ===0){
//         console.log(xxx[i])
//     }
// }

// ЗВОРОТНІЙ ЦИКЛ(9)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = xxx.length - 1; i >= 0; i--) {
//     if(i%2 ===0){
//         console.log(xxx[i])
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten" (я не поняла, шо це і як це)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for(let  i of xxx){
//     let item = xxx[i]
//     if(item % 3 === 0){
//       item  = "okten"
//     }
//     console.log(item)
// }

// ЗВОРОТНІЙ ЦИКЛ(8) (чесно визнаю,що я це списала!)
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = xxx.length - 1; i >= 0; i--) {
// let item = xxx[i]
//     if(item %3 ===0){
//         item = "okten"
//     }
//     console.log(item)
// }

// 8. вивести масив в зворотньому порядку.
// let xxx = [2,17,13,6,22,31,45,66,100,-18]
// for (let i = xxx.length - 1; i >= 0; i--) {
//     const xxx1 = xxx[i];
//     console.log(xxx[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)