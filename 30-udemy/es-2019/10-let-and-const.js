// ключевые слова let и const

// ОБЛАСТЬ ВИДИМОСТИ:
// облястью видимости переменной var является вся функция
// в то время как let и const только в рамках блока

// неписаное правило: объявляем все переменные через const
// а если нужно ее изменить изменяем на let


let name = 'Joe';

name = 'Bob';

console.log('name', name);

const pi = 3.14;
// pi = 4; // error!
console.log('pi', pi);


const names = ['Peter', 'John', 'Bob'];
names.push('Ivan');


console.log('names', names);

// names = []; // error!


const Person = {
    name: 'Joe',
    age: 25,
};

Person.name = 'Bob';
console.log('Person', Person);

// Person = {};  // error


