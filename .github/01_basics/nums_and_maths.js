const score=400
console.log(score)

const balance= new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber= 123.8966
console.log( otherNumber.toPrecision(3));
console.log( otherNumber.toPrecision(4));

const hundreds=1000000
console.log( hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++ maths+++++++++++++++++++++++++


console.log( Math.abs(-4));
console.log( Math.round(46.2));
console.log( Math.floor(46.2));
console.log( Math.ceil(46.2));

console.log( Math.random());
console.log( (Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);


