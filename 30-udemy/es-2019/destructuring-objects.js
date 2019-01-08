// Destructuring for objects

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
};

// const firstName = person.firstName;
// const lastName = person.lastName;

// es 2015
// const {firstName, lastName} = person;
// console.log('firstName', firstName, 'lastName', lastName);

// nested destructuring
const person2 = {
    name: {
        first: 'John',
        last: 'Smith',
    },
    age: 27
};

const {name: {first, last}} = person2;
console.log(first, last);

//default params
// const {role = 'user'} = person2;
// console.log('role', role);

//v2
const {permissions: {role ='user'} = {}} = person2;
console.log('role', role);

// v3 function args
// function connect(options){}
function connect({
    host = 'localhost',
    port = 123456,
    user = 'guest'} = {}){

    console.log('host', host, 'port', port, 'user', user)
}

connect({
    user: 'Peter',
});

// v4 destructuring + получения rest агрументов
dict = {
    duck: 'quaсk',
    dog: 'wof',
    mouse: 'squeak'
};

const {duck, ...other} = dict;

console.log(duck, other);