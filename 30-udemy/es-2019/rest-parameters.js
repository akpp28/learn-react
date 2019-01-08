// функции которые работают с переменным количеством параметров
// EcmaScript 2015
// ограничения:
// 1. rest parameter - должен стоять в конце всех агрументов
// 2. rest parameter - должен быть только один


function max() {
    // psevdo-array
    arguments  // [Arguments] { '0': 1, '1': 2, '2': 3 }
    // console.log('arguments', arguments);

    var args = Array.prototype.slice.call(arguments)
    args // [ 1, 2, 3 ]
    // console.log('args', args);
}

function max2(... args){
    args // [ 1, 2, 3, 4, 50 ]
    // console.log('rest args', args)
}

console.log('result1', max(1, 2, 3));
console.log('rest result2', max2(1,2,3,4,50));