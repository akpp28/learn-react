/*
Class properties
 */


// ECMAScript 2019 stage 3
// class Counter {
//     count = 0;
//     inc = () => {
//         this.count++;
//     }
//     static incrementStep = 2;
// }

// standard variant
class Counter {
    constructor() {
        this.count = 0;
        this.inc = () => {
            this.count++;
        }
    }

}

Counter.incrementStep = 2;

const c = new Counter();
c.inc();
console.log('c', c, Counter.incrementStep)