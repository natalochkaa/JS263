// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//----------------------------------------------------------------------------------------------------------------------
let div = document.getElementById(`text`);
let button = document.createElement(`button`);
button.classList.add(`versace`);
button.innerText = `click me`;
button.onclick = function () {
    document.getElementById(`text`).style.display = `none`;
}
document.body.appendChild(button);
//======================================================================================================================
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//----------------------------------------------------------------------------------------------------------------------
//в html
//======================================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//----------------------------------------------------------------------------------------------------------------------
let gov = document.getElementById(`age`);
let imageDiv = document.getElementById('image');
onsubmit = function (e) {
    e.preventDefault();
    let age = +document.getElementById(`age`).value;
    if (!age) {
        alert(`Будь ласка, введіть Ваш вік`);
    } else if (age < 18) {
        alert(`Вибачте, неможливо показати контент через вікові обмеження`);
    } else {
        let img = document.createElement('img');
        img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2dccb160-261b-45a1-92ab-99f73d073019/de8fj68-09446a07-628a-4754-8d3a-d13c776269b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkY2NiMTYwLTI2MWItNDVhMS05MmFiLTk5ZjczZDA3MzAxOVwvZGU4Zmo2OC0wOTQ0NmEwNy02MjhhLTQ3NTQtOGQzYS1kMTNjNzc2MjY5YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.anEo9AecMaq9z8vqpy0CHu0KEiU6wtACZLTvRMnKFgo';
        img.style.width = '400px';
        imageDiv.appendChild(img);
        alert(`Раді Вас бачити на нашому сайті`);
    }
}
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName(`menu`)[0];
console.log(menu);
menu.onclick = function () {
    console.log(this.children);
    for (let item of this.children) {
        item.classList.toggle(`hide`);
    }

}
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let arr = [
    {name: `"Costco"`, founder: `James Sinegal `, site: ` www.costco.com`},
    {name: `"Argos"`, founder: `Richard Tompkins `, site: `www.argos.co.uk`},
    {name: `"T.J. Maxx"`, founder: `Bernard Cammarata`, site: `www.tkmaxx.com`},
    {name: `"Amazon"`, founder: `Jeff Bezos`, site: `www.amazon.com`}
]
console.log(arr);
for (let item of arr) {
    let divArr = document.createElement(`div`);
    divArr.classList.add(`arrDiv`);
    let h1 = document.createElement(`h1`);
    let h2 = document.createElement(`h2`);
    let h3 = document.createElement(`h3`);
    h1.innerHTML = `Shop - ${item.name}`;
    h2.innerHTML = `Founder - ${item.founder}`;
    h3.innerText = `Site - ${item.site}`;

    let siteButton = document.createElement(`button`);
    siteButton.classList.add(`siteButton`);
    siteButton.innerHTML = `<h3>Згорни мене</h3>`;

    siteButton.onclick =  function (){
        divArr.classList.toggle(`hide`);
    }
    divArr.append(h1, h2, h3, siteButton);
    document.body.appendChild(divArr);
}
