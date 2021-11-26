// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let arr = (a,b,c)=>{
//     if (a<b && a<c){
//         console.log(a)
//     }
//     else if(b<a && b<c){
//         console.log(b)
//     }
//     else if(c<a && c<b){
//         console.log(c)
//     }
//     else {
//         console.log(0)
//     }
// }
// arr(90,100,60)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let arr =(a,b,c)=>{
//     if (a>b && a>c){
//         console.log(a)
//     }
//     else if(b>a && b>c){
//         console.log(b)
//     }
//     else if(c>a && c>b){
//         console.log(c)
//     }
// }
// arr(70,50,80)
// - створити функцію яка повертає найбільше число з масиву
// let xxx = [10,70,50,30,1000]
// let maxnumber = (xxx)=>{
//     let max = xxx[0]
//     for(let item of xxx){
//         if (item > max){
//             max= item;
//         }
//     }
//     return max;
// }
// console.log(maxnumber(xxx))
// - створити функцію яка повертає найменше число з масиву
// let xxx = [10,70,50,30,100]
// let minnumber = (xxx)=>{
//     let min = xxx[0]
//     for(let item of xxx){
//         if (item < min){
//             min= item;
//         }
//     }
//     return min;
// }
// console.log(minnumber(xxx))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let number=(a,b,c,d)=>{
//     let res = 0
//     for(let item of arguments){
//         res=res+item
//     }
//     return res
// }
// let res=number(10,90,50,20)
// console.log(res)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let middle = [10,10,40];
// let middle1 = (middle)=>{
//     let res = 0;
//     for (const item of middle) {
//         res = item + res;
//     }
//     return res/middle.length;
// }
// console.log(middle1(middle))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше (Math використовувати заборонено);
// let minmaxf=(arg)=> {
//     let min = arg [0]
//     let max = arg [0]
//     for (let item of arg) {
//         if (item > max) {
//             max = item
//         }
//         if (item < min) {
//             min = item
//         }
//     }
//     console.log("max", max)
//     return min
// }
// console.log(minmaxf(10,70,900,80))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomizer=(limit)=>{
//     let result = Math.round(Math.random()*limit)
//         return result
// }
// console.log(letx1=randomizer(100))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону. (чось воно не працює:()

// let randomizer1=(size, limit)=> {
//     let random1 =[]
//     for (let i = 0; i < size; i++) {
//         random1[i]= Math.round(Math.random() * limit)
//     }
//         return random1
// }
// console.log(randomizer1(10, 100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let xxx =[5,9,11]
// let neww =(xxx)=>{
//     let newarr = []
//     for (let i = xxx.length - 1,r=0; i >= 0; i--, r++) {
//        newarr[i] = xxx[r]
//     }
//     return newarr
// }
// console.log(neww(xxx))