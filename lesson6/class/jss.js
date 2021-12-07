// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// -------------------------------------------------------------------------------------------------------------
// let name = "'Harry..Potter', 'Ron---Whisley','Hermione__Granger'"
// let newname = (name) => {
//     return name.replaceAll("..", " ").replaceAll("---", " ").replaceAll("__", " ")
// }
// console.log(newname(name))
// ==========================================================================================================
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// -------------------------------------------------------------------------------------------------------------
// let numb = (limit) => {
//     let arr = []
//     for (let i = 1; i < limit; i++) {
//         arr.push(Math.floor(Math.random() * limit))
//     }
//     return arr
// }
// let res = numb(100)
// console.log(res)
// ==========================================================================================================
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// -------------------------------------------------------------------------------------------------------------
// let numb = (limit) => {
//     let arr = []
//     for (let i = 1; i < limit; i++) {
//         arr.push(Math.floor(Math.random() * limit))
//     }
//     return arr.sort((a, b) => a - b)
// }
// let res = numb(100)
// console.log(res)

// ==========================================================================================================
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// -------------------------------------------------------------------------------------------------------------
// let numb = (limit) => {
//     let arr = []
//     for (let i = 1; i < limit; i++) {
//         arr.push(Math.floor(Math.random() * limit))
//     }
//     return arr.filter(value => (value % 2 === 0)
//     )
// }
// let res = numb(100)
// console.log(res)
// ==========================================================================================================
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// -------------------------------------------------------------------------------------------------------------
// let callback = numb(50)
// let map = callback.map(value => value.toString())
// console.log(map)
// ==========================================================================================================
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// -------------------------------------------------------------------------------------------------------------

// function sortNums(nums, direction) {
//     if (direction === 'more') {
//         return nums.sort((a, b) => a - b)
//     } else if (direction === `less`) {
//         return nums.sort((a, b) => b - a)
//     } else return undefined
// }
//
// console.log(sortNums([11, 21, 3], `more`))
// ==========================================================================================================
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -------------------------------------------------------------------------------------------------------------
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));