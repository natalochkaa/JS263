// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//----------------------------------------------------------------------------------------------------------------------
// let xxx = document.getElementsByClassName(`divHtml`)[0];
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(json =>{
//         for (let item of json){
//             let div = document.createElement(`div`);
//             div.classList.add(`post`);
//
//             let divID = document.createElement(`div`);
//             divID.innerText = `id - ${item.id}`;
//
//             let userId = document.createElement(`div`);
//             userId.innerText = `User Id - ${item.userId}`;
//
//             let title = document.createElement(`h3`);
//             title.innerText = `title - "${item.title}"`;
//
//             let body = document.createElement(`p`);
//             body.innerText = `text - ${item.body}`;
//
//             div.append(divID,userId,title,body);
//             xxx.appendChild(div);
//         }
//     });
//======================================================================================================================
//     2.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
//----------------------------------------------------------------------------------------------------------------------
// let newDiv = document.getElementsByClassName(`comment`)[0];
// fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then(response => response.json())
//     .then(json =>{
//         for (let item of json){
//             let divComment = document.createElement(`div`);
//             divComment.classList.add(`comment`);
//
//             let divID = document.createElement(`div`);
//             divID.innerText = `id - ${item.id}`;
//
//             let postId = document.createElement(`div`);
//             postId.innerText = `Post Id - ` + item.postId;
//
//             let name = document.createElement(`h3`);
//             name.innerText = `name - "${item.name} "`;
//
//             let email = document.createElement(`h4`);
//             email.innerText = `email - ` + item.email;
//
//             let body = document.createElement(`p`);
//             body.innerText = `${item.body}`;
//
//             divComment.append(divID,postId,name,email,body);
//             newDiv.appendChild(divComment);
//         }
//     });