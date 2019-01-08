// разкладывает массив на независимые елементы


const arr = [1, 2, 5];
const arr2 = [12, 23, 53];
const res = Math.max.apply(Math, arr);
console.log('max', res);

const res2 = Math.max(... arr, ... arr2);
console.log('max2', res2);


const shallowCopyArray = [... arr, ... arr2];

console.log('arr1', arr, 'arr2', arr2, 'copy', shallowCopyArray)
// const a, b, c = ... arr;

// console.log('a,b,c', a, b, c)