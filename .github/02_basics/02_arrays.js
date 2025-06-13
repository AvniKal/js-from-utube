console.log(Array.isArray("avni"))
console.log(Array.from("avni"))
console.log(Array.from({name:"avni"}))    // interesting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2.score3))

const marvel_heros=["shaktiman","thor","ironman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

//const newHeros=marvel_heros.concat(dc_heros)
//console.log(newHeros)
//console.log(marvel_heros)

const all_new_heros=[...marvel_heros,...dc_heros]   // spread operator
console.log(all_new_heros)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= anotherArray.flat(Infinity)
console.log(real_another_array)








