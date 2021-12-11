// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід `main_header`
let nameId = document.getElementById(`main_header`);
nameId.classList.add(`sep-2021`);
console.log(nameId);
// b) робить шириниу елементу ul 400px
let nameTag = document.getElementsByTagName(`ul`);
console.log(nameTag);
nameTag[0].style.width = `400px`;
nameTag[0].style.height = `100px`;
nameTag[0].style.background = `lightpink`;
console.log(nameTag);
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthLinkList = document.getElementsByClassName(`linkList`);
console.log(widthLinkList);
for (let item of widthLinkList) {
    item.style.width = `50%`;
    item.style.background = `pink`;
}
console.log(widthLinkList);
// d) отримує текст який зберігається в елементі з класом listElement2
let saveList = document.getElementsByClassName(`listElement2`);
for (let item of saveList) {
    item.innerHTML = `VERSACE`;
}
console.log(saveList);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName(`li`);
for (let item of li) {
    item.style.background = `silver`;
}
console.log(li);
// f) отримує всі елементи 'a' та додає їм клас anchor
let addNewClass_a = document.getElementsByTagName(`a`);
for (let item of addNewClass_a) {
    item.classList.add(`anchor`);
}
console.log(addNewClass_a);
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let ifText = document.getElementsByTagName(`a`);
for (let item of ifText) {
    if (item.innerText === `link3`) {
        item.style.fontSize = `40px`;
    }
}
console.log(ifText);
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a (шось я не поняла, як це зробити)
let addNewClass = document.getElementsByTagName(`a`);
for (let item of addNewClass) {
    item.classList.add(`element_XXX`);
}
console.log(addNewClass);
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let elemenTs = document.getElementsByClassName('sub-header');
for(let item of elemenTs){
    item.style.color = prompt(`Your choice:(green,pink,blue)`);
}
console.log(elemenTs);
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let elementsSub = document.getElementsByClassName('sub-header');
for (let item of elementsSub){
    if(item.textContent === `content 2 segment`){
        item.style.color = prompt(`Your choice:(green,pink,blue)`);
    }
}
console.log(elementsSub);
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let elementClass = document.getElementsByClassName(`content_1`);
for (let item of elementClass){
    item.innerText = prompt(`Your choice:(green,pink,blue)`);
}
console.log(elementClass);

// l) отримати елементи p та змінити їм padding на 20px
let elementsP = document.getElementsByTagName(`p`);
for (let item of elementsP) {
    item.style.padding = `20px`;
}
console.log(elementsP);

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsTEXT2 = document.getElementsByClassName(`text2`);
for (let item of elementsTEXT2) {
    item.innerHTML = `"Modern Talking"`;
}
console.log(elementsTEXT2);