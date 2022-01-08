function wakeUp(newDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (newDay) {
                resolve(`Have a good day`);
            } else {
                reject(`WAKE UP!!!`);
            }
        }, 1000);
    })
}

function bathroom(affairs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (affairs) {
                resolve(`next level`);
            } else {
                reject(`you sleep?`);
            }
        }, 500);
    })
}

function Cook(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (affairs) {
                resolve(`cheesecakes`);
            } else {
                reject(`you want cheesecakes?`);
            }
        }, 1000);
    });
}

function goEat(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (affairs) {
                resolve(`with cherry jam`);
            } else {
                reject(`with what?`);
            }
        }, 100);
    });
}

function gather(clothing) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (affairs) {
                resolve(`make up `);
            } else {
                reject(`you are late`);
            }
        }, 1000);
    });
}

function affairs(work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (affairs) {
                resolve(`GO`);
            } else {
                reject(`GO GO GO GO GO GO!!!`);
            }
        }, 900);
    })
}

function Gym(evening) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (affairs) {
                resolve(`Well done`);
            } else {
                reject(`you lazy lady :D`);
            }
        }, 900);
    });
}

wakeUp(true)
    .then(morning => {
        console.log(morning);
        return bathroom(true);
    })
    .then(yourTime => {
        console.log(yourTime);
        return Cook(true);
    })
    .then(tasty => {
        console.log(tasty);
        return goEat(true);
    })
    .then(jam => {
        console.log(jam);
        return gather(true);
    })
    .then(dress => {
        console.log(dress);
        return affairs(true);
    })
    .then(workk => {
        console.log(workk);
        return goEat(true);
    })
    .then(againEat => {
        console.log(`dinner - pasta`);
        return Gym(true);
    })
    .then(sport =>{
        console.log(sport);
    })

