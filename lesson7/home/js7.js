// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//----------------------------------------------------------------------------------------------------------------------
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let manyUsers = [
    new User(1, `Steven`, `Jobs`, `steve@apple.com`, +1234567890),
    new User(2, `Stevenn`, `Jobss`, `stewtrfwerrfve@apple.com`, +123464567890),
    new User(3, `Stevennn`, `Jobsss`, `stevq4tfwe@apple.com`, +12345674362890),
    new User(4, `Stevennnn`, `Jobssss`, `stevwtg3e@apple.com`, +123456785654690),
    new User(5, `Stevennnnn`, `Jobsssss`, `stevrgtwre@apple.com`, +12345456267890),
    new User(6, `Stevennnnnn`, `Jobssssss`, `stevere@apple.com`, +12345624567890),
    new User(7, `Stevennnnnnn`, `Jobsssssss`, `stevergere@apple.com`, +1232344567890),
    new User(8, `Stevennnnnnnn`, `Jobsssssss`, `stevregwrewrge@apple.com`, +12345672354890),
    new User(9, `Stevennnnnnnnn`, `Jobsssssss`, `stevergtr@apple.com`, +1234562347890),
    new User(10, `Stevennnnnnnnn`, `Jobsssssss`, `stevwegre@apple.com`, +1234523467890)
]
console.log(manyUsers)
//======================================================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter) тут чось не получилось
//----------------------------------------------------------------------------------------------------------------------
let evenNumbers = manyUsers.filter(value => value.id % 2 === 0)
console.log(evenNumbers)
//======================================================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//----------------------------------------------------------------------------------------------------------------------
let sortUser = manyUsers.sort((a, b) => b.id - a.id)
console.log(sortUser)
//======================================================================================================================
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//----------------------------------------------------------------------------------------------------------------------
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
        this.order = order
    }
}
//======================================================================================================================
// створити пустий масив, наповнити його 10 об'єктами Client
//----------------------------------------------------------------------------------------------------------------------
let Chocolate = [
    new Client(5, `TESCO`, `Jack Cohen`, ` press.office@tesco.com`, `+44 (0) 330 6780 639`, [`Ferrero Rocher`]),
    new Client(9, `TESCO`, `Jack Cohen`, ` press.office@tesco.com`, `+44 (0) 330 6780 639`, [`Ferrero Rocher`, `Lindt Lindor`]),
    new Client(6, `TESCO`, `Jack Cohen`, ` press.office@tesco.com`, `+44 (0) 330 6780 639`, [`Ferrero Rocher`, `Lindt Lindor`, `Quality Street`]),
    new Client(2, `TESCO`, `Jack Cohen`, ` press.office@tesco.com`, `+44 (0) 330 6780 639`, [`Ferrero Rocher`, `Lindt Lindor`, `Quality Street`, `Tesco Christmas Pudding 400G`])
]
//======================================================================================================================
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//----------------------------------------------------------------------------------------------------------------------
let sortOrder = Chocolate.sort((a, b) => b.order.length - a.order.length)
console.log(sortOrder)