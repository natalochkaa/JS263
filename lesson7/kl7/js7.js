// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//----------------------------------------------------------------------------------------------------------------------
function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model
    this.manufacturer = manufacturer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    this.info = function () {
        console.log(`model - ${this.model},manufacturer - ${this.manufacturer},year - ${this.year}, maxSpeed - ${this.maxSpeed},engineCapacity-${this.engineCapacity}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let mersedes = new Car(`GLA-Class 0252680038`, 'Mercedes-Benz', 2018, `205 км / год`, `1950 куб. см`)
console.log(mersedes)
mersedes.drive()
mersedes.info()
mersedes.increaseMaxSpeed(20)
mersedes.changeYear(2021)
mersedes.addDriver()
console.log(mersedes)
//======================================================================================================================
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//----------------------------------------------------------------------------------------------------------------------
class SuperCar extends Car {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        super(model, manufacturer, year, maxSpeed, engineCapacity);
    }
}

let like = new SuperCar(`S-Class`, `Mercedes-Benz `, 2018, `210 км / год`, `1960 куб. см`)

console.log(like)
//======================================================================================================================
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//----------------------------------------------------------------------------------------------------------------------
class Cinderella {
    constructor(Name, age, size) {
        this.Name = Name
        this.age = age
        this.size = size
    }
}

let cinderellas = [
    new Cinderella(`Olivia`, 22, `36`),
    new Cinderella(`Sophia`, 19, `39`),
    new Cinderella(`Isabella`, 26, `39`),
    new Cinderella(`Mia`, 24, `41`),
    new Cinderella(`Charlotte`, 78, `35`),
    new Cinderella(`Evelyn`, 34, `37`),
    new Cinderella(`Amelia`, 18, `38`),
    new Cinderella(`Clementine`, 20, `42`),
    new Cinderella(`Matilda`, 29, `38`),
    new Cinderella(`Meghan Markle`, 40, `40`)
]
console.log(cinderellas)

class Prince extends Cinderella {
    constructor(Name, age, choose) {
        super(Name, age);
        this.choose = choose
    }
}

let prince = new Prince(`Henry Charles`, 37, `40`)
console.log(prince)

let family = (cinderellas, prince) => {
    for (let item of cinderellas) {
        if (item.size === prince.choose) {
            return `your choose - ${item.Name}`
        }
    }
}
console.log(family(cinderellas, prince))

let resalt = cinderellas.find(value => value.size === prince.choose)
console.log(resalt)