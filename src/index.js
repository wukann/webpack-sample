const cats = require('./cats.js');
console.log('cats:', cats);

const dogs = require('json-loader!./dogs.json');
console.log('dogs:' + dogs);
