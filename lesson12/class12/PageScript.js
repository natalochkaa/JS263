// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//----------------------------------------------------------------------------------------------------------------------
let xxx = document.getElementsByClassName(`post`)[0];

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(json => {
        for (let item of json) {
            let div = document.createElement(`div`);
            div.classList.add(`stylee`);
            let postDiv = document.createElement(`div`);
            postDiv.innerHTML = `id - ${item.id}, user Id - ${item.userId}`;
            let title = document.createElement(`h3`);
            title.innerHTML = `title - ${item.title}`;
            let body = document.createElement(`p`);
            body.innerHTML = `text - ${item.body}`;
            let btn = document.createElement(`button`);
            btn.innerHTML = `click me`;
            btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts/' + item.id + '/comments')
                    .then(answer => answer.json())
                    .then(json => {
                        let createDiv = document.createElement(`div`);
                        createDiv.classList.add(`btnClick`);
                        for (let i of json) {
                            let comments = document.createElement(`div`);
                            comments.classList.add(`styleDIV`);
                            comments.innerHTML = i.body;
                            createDiv.appendChild(comments);
                        }
                        div.appendChild(createDiv);
                    })
            }
            div.append(postDiv, title, body, btn);
            xxx.appendChild(div);
        }
    })
