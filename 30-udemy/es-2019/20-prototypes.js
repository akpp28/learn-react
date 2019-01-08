// Prototypes
/*
1. Object.setPrototypeOf
2. Object.create
3. user function create object
4. using
 */


const animal = {
    say() {
        console.log(this.name, 'goes', this.voice)
    }
};

const dog = {
    name: 'dog',
    voice: 'wuff',
};
// Warning: work slowly
Object.setPrototypeOf(dog, animal);
const cat = {
    name: 'cat',
    voice: 'meow',
};
// Warning: work slowly
Object.setPrototypeOf(cat, animal);


dog.say();
cat.say();


// v2 recommended way: Object.create()


const dog2 = Object.create(animal);

dog2.name = 'dog';
dog2.voice = 'wuff';

dog2.say()


// v3
function createAnimal(name, voice){
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result
}


const sheep = createAnimal('sheep', 'bee');

console.log('sheep', sheep);

// v4 функция конструктор

function Animal(name, voice){
    this.name = name;
    this.voice = voice;
}


Animal.prototype.say = function() {
    console.log(this.name, 'goes:', this.voice)
};


const duck = new Animal('duck', 'kray');

console.log('dug', duck);
duck.say();


// v5 объект без прототипа

const obj1 = Object.create(null);

// console.log(obj1.toString()); // error!


