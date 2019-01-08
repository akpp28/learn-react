// objects

const x = 10;
const y = 15;

const point = {
    x: x,
    y: y, 
    draw: function () {
        // ...
    }
};

const p = {
    x,
    y,
    draw(){
        // ...
    }
}

console.log(p);

//v2 dynamic key

const prefix = '_br_';

const data = {
    [prefix+ 'name']: 'Bob'
};

console.log('data', data);

// v3 copy properties, создание поверхносной копии объекта

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};


const opts = {
    user: 'John',
    password: '123456'
};

const d = Object.assign({}, defaults, opts);
console.log(d);


// v4 shallow copy
const person = {
    name: 'Bob',
    friends: ['Mark', 'Jacob'],
};


const shallowCoppy = Object.assign({}, person);
person.friends.push('Jame');

// { name: 'Bob', friends: [ 'Mark', 'Jacob', 'Jame' ] }
console.log('shallowCoppy', shallowCoppy);
