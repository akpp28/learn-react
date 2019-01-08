//Classes

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;

    }

    say() {
        console.log(this.name, 'goes', this.voice)
    }
}

// duck --> Bird.prototype --> Animal.prototype --> Object.prototype
class Bird extends Animal{
    constructor(name, voice, canFly){
        super(name, voice);
        super.say()
        this.canFly = canFly;
    }

}


const duck = new Bird('Duck', 'quack', true);
console.log(duck)
// duck.say()