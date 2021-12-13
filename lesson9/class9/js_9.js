// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://i.pinimg.com/originals/ba/2e/42/ba2e4207d5c228e3b95a85f1f3ac9e29.jpg'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'https://i.pinimg.com/originals/6a/5b/f2/6a5bf2603c9c5f22c2bbe3ef5b19694c.jpg'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://i.pinimg.com/736x/3e/45/26/3e45260a0e57667ab6873ca00adfb1f0.jpg'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'data:image/png;base64,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'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://i.pinimg.com/originals/2f/52/b9/2f52b9536f93e977800c69efe684590c.jpg'
//     },
// ];
// console.log(simpsons);
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//----------------------------------------------------------------------------------------------------------------------
// for (let item of simpsons) {
//     let div = document.createElement(`div`);
//     div.classList.add(`member`);
//     div.innerText = `${item.name},${item.surname},${item.age},${item.info}`;
//     document.body.appendChild(div);
//     let img = document.createElement(`img`);
//     img.src = item.photo;
//     div.appendChild(img);
// }
//----------------------------------------------------------------------------------------------------------------------
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу створити окремий блок, та помістити його у div.member
// for (let item of simpsons) {
//     let div = document.createElement(`div`);
//     div.classList.add(`member`);
//     let divName = document.createElement(`div`);
//     divName.innerText = item.name;
//     let divCloneSurname = divName.cloneNode(true);
//     divCloneSurname.innerText = item.surname;
//     let divCloneAge = divName.cloneNode();
//     divCloneAge.innerText = item.age;
//     let divCloneInfo = divName.cloneNode();
//     divCloneInfo.innerText = item.info;
//     let photo = document.createElement(`img`);
//     photo.src = item.photo;
//     div.append(divName, divCloneSurname, divCloneAge, divCloneInfo, photo);
//     document.body.appendChild(div);
//     console.log(div);
// }
//======================================================================================================================
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray);
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// for (let item of coursesArray) {
//     let divCoursesArray = document.createElement(`div`);
//     divCoursesArray.classList.add(`member`);
//     let h1Title = document.createElement(`h1`);
//     h1Title.innerText = item.title;
//     let h1MonthDuration = document.createElement(`h4`);
//     h1MonthDuration.innerText = `Month Duration - ${item.monthDuration}`;
//     let h1HourDuration = h1MonthDuration.cloneNode();
//     h1HourDuration.innerText = `Hour Duration - ${item.hourDuration}`;
//     let divModules = document.createElement(`ul`);
//     divModules.innerText = `Modules:`;
//     for (let modulesItem of item.modules) {
//         let mood = document.createElement(`li`);
//         mood.innerText = modulesItem;
//         divModules.appendChild(mood);
//     }
//
//     divCoursesArray.append(h1Title, h1MonthDuration, h1HourDuration, divModules);
//     document.body.appendChild(divCoursesArray);
//     console.log(divCoursesArray);
// }