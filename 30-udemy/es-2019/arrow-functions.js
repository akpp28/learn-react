// легковесная версия обычных функций

function square(x) {
    return x*x;

}
console.log('sqrt', square(3))

// variant 1: самый короткий вариант записи
const sq = x => x*x;

// variant 2
const sq2 = (x) => x*x;

// variant 3
const sq3 = (x) => {
    return x*x;
};

console.log('arrow sqrt', sq(4));

// обычная фукнция против стрелочной

const arr = ['1', '3', '8', '13', '20'];
const res = arr
    .map(x => parseInt(x))
    .filter(x => x%2)
    .reduce((m, x) => Math.max(m, x));

console.log('res', res )

const res2 = arr
    .map(function (x) {
        return parseInt(x)
    }).filter(function (x) {
        return x%2;

    }).reduce(function (m, x) {
        return Math.max(m, x)
    });

console.log('res2', res2 );

// контекст this
const greeter = {
    greet: function (name) {
        console.log('Hello', name);

    },
    greetAll: function (names) {
        // names.forEach(function (name) { // error: this.greet is not a f.
        names.forEach((name) => {
            this.greet(name);
        })
    }
};


greeter.greetAll(['Bob', 'Mark', 'Peter']);

