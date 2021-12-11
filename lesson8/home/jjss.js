// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let elementID = document.getElementById(`content`);
console.log(elementID);
// -- отримує текст з блоку з id "rules"
let elementID2 = document.getElementById(`rules`);
console.log(elementID2);
// -- замініть текст параграфа з id 'content' на будь-який інший
let changeTextElementID = document.getElementById(`content`);
changeTextElementID.innerHTML = "<strong> The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies, dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist. All we do know is that the visible Universe is at least 93 billion light years across</strong>";
console.log(elementID);
// -- замініть текст параграфа з id 'rules' на будь-який інший
let changeTextElementID2 = document.getElementById(`rules`);
changeTextElementID2.innerText = "The Universe contains billions of galaxies, each containing millions or billions of stars. The space between the stars and galaxies is largely empty. However, even places far from stars and planets contain scattered particles of dust or a few hydrogen atoms per cubic centimeter.";
// -- змініть кожному елементу колір фону на червоний
let changeFon = document.body.children;
for (let item of changeFon) {
    item.style.background = `red`;
}
console.log(changeFon);
// -- змініть кожному елементу колір тексту на синій
let changeColor = document.body.children;
for (let item of changeColor) {
    item.style.color = `blue`;
}
console.log(changeFon);
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classId = document.getElementById(`rules`);
console.log(classId.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let changeColorText = document.getElementsByClassName(`fc_rules`);
for (let item of changeColorText) {
    item.style.color = `red`;
}
console.log(changeColorText);