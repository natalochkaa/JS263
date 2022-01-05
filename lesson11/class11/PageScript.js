// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let item of users) {
    let usersDiv = document.createElement("div");
    usersDiv.classList.add(`style`);
    usersDiv.innerHTML = JSON.stringify(item);
    let btn = document.createElement(`button`);
    btn.innerHTML = `додати до улюблених`;
    btn.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem(`favorites`)) || [];
        favorites.push(item);
        localStorage.setItem(`favorites`, JSON.stringify(favorites));
    }
    usersDiv.appendChild(btn);
    document.body.appendChild(usersDiv);

}
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі
