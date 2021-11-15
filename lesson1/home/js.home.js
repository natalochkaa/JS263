// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// Відповідь:
let www;
www = "hello ";
console.log(www);
// alert(www);
document.write(www);

hello = "Congratulations ";
console.log(hello);
// alert(hello);
document.write(hello);


let zzz;
zzz = "owu ";
console.log(zzz);
// alert(zzz);
document.write(zzz);

owu = "world ";
console.log(owu);
// alert(owu);
document.write(owu);


zzz = "com ";
console.log(zzz);
// alert(zzz);
document.write(zzz);

com = "biz ";
console.log(com);
// alert(com);
document.write(com);

let xxx = "ua ";
console.log(xxx);
// alert(xxx);
document.write(xxx);

ua = "usa ";
console.log(ua);
// alert(ua);
document.write(ua);


let ttt = 1;
console.log(ttt);
// alert(ttt);
document.write(ttt);


// let a = 1;
// a = 91;
// console.log(a);
// // alert(a);
// document.write(a);


let versace = 10;
console.log(versace);
// alert(versace);
document.write(versace);

d = 10;
d = 110;
console.log(d);
// alert(d);
document.write(d);

let b = -999;
console.log(b);
// alert(b);
document.write(b);

k = -999;
k = -666;
console.log(k);
// alert(k);
document.write(k);

let v = 123;
console.log(v);
// alert(v);
document.write(v);

m = 123;
m = 321;
console.log(m);
// alert(m);
document.write(m);

const PI = 3.14;
console.log(PI);
// alert(PI);
document.write(PI);

n = 3.14;
n = 41.3;
console.log(n);
// alert(n);
document.write(n);

const IP = 2.7;
console.log(IP);
// alert(IP);
document.write(IP);

l = 2.7;
l = 7.2;
console.log(l);
// alert(l);
document.write(l);


let p = 16;
console.log(p);
// alert(p);
document.write(p);

y = 16;
y = 61;
console.log(y);
// alert(y);
document.write(y + "<br/>");

console.log(!!"0");
console.log(!!0);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років"..
let firstName = "Лінa";
let maddleName = "Василівна"
let lastName = "Костенко"
let person = `${firstName} ${maddleName} ${lastName} `
console.log( person )
 prompt(`Вітаю, Ліно Василівно. Вам 91 рік.`)

// я не зовсім зрозуміла це завдання.


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
console.log(typeof 100)
console.log(typeof '100')
console.log(typeof true)

// В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6)
console.log(5 > 6)
console.log(5 >= 6)
console.log(5 === 6)
console.log(10 == 10)
console.log(10 === 10)
console.log(10 < 10)
console.log(10 !== 10)
console.log(10 > 10)
console.log(123 === "123")
console.log(123 == "123")


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = +"20";
// string, поставила + уже number.
let a = 5;
// number
console.log(str, a)
document.write(str + a + "<br/>");
// бо 20+5=25 і так дальше......
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");







