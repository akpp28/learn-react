// Spred operator for objects


const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};


const opts = {
    user: 'John',
    password: '123456'
};

// ES 2015
const result = Object.assign({}, defaults, opts);
console.log(result);


// ES 2018
port = 8080;
const result2 = {...defaults, ...opts, port};
console.log(result2);