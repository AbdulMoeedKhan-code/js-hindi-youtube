const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);          //[ 'thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'Batman' ] 

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_aray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_aray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Moeed"));// "false" bcz there is no array like it in the above array written
console.log(Array.from("Moeed")); //  "[ 'M', 'o', 'e', 'e', 'd' ]" it will make this string text letter into array
console.log(Array.from({name:"Moeed"})); // "[]" it will give us empty array bcz it is not been able to convert it array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));











