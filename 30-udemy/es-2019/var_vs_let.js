/*
var i 3
var i 3
var i 3
*/
for (var i = 0; i<3; i++){
    setTimeout(function () {
        console.log('var i', i)
    }, i*100)
}


/*
let i 0
let i 1
let i 2
*/
for (let i = 0; i<3; i++){
    setTimeout(function () {
        console.log('let i', i)
    }, i*100)
}