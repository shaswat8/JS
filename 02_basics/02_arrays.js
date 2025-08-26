const marvel_heroes = ["Spiderman", "Ironman", "Hulk", "Thor"]
const dc_heroes = ["Batman", "Superman", "Flash", "Aquaman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[4][1]);



// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// const all_new_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_Heroes);

const another_array = [1, 2, 3, ,4,[ 5, 6, 7, 8, 9][5,6]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("shaswat"))
console.log(Array.from("shaswat"))
console.log(Array.from({name: "shaswat"})) // (interesting and for interview purpose)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));