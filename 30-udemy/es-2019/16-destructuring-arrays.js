// Array Destructuring

const fib = [1, 2, 3, 5, 8, 13];

[a, b, c] = fib;
[, , , d, , f] = fib;

console.log('a,b,c', a, b, c);
console.log('d,f', d, f);

//v2 nested lists

const line = [[2, 4], [6, 8]];
const [[aa, bb], [cc, dd]] = line;

console.log('aa, bb', aa, bb, 'cc, dd', cc, dd);

// v3 default params
const people = ['Chris', 'Sandra', 'Bill', 'Robert'];

const [name1, name2, name3 = 'Bob', ...other] = people;

console.log('name1', name1, 'name2', name2, 'name3', name3, 'other', other);


// v4 find by value

dict = {
    duck: 'quaсk',
    dog: 'wuff',
    mouse: 'squeak'
};

const items = Object.entries(dict);
console.log('items', items);


// const res = items.filter((arr) => arr[1] === 'wuff')
// use destructuring
const res = items
    .filter(([k, v]) => v == 'wuff')
    .map(([k, v]) => k);
// const res = (k, v) => v == 'wuff';
console.log('res', res);

// v5 mixed destructuring
const shape = {
        type: 'segment',
        coordinates: {
            start: [12, 13],
            end: [21, 22]
        },
    };

const { coordinates: { start: [startX, startY], end: [endX, endY]}} = shape;
console.log(startX, startY, endX, endY);
