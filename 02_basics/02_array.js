const marvel_heros = ["thor","ironman","hulk"];
const dc_heros = ["superman","flash","batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);
// console.log(marvel_heros + dc_heros);
// const all_heros = marvel_heros.concat(dc_heros);
const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);
const another_array = ['1','2',['3','4'],5,['6','7',['13','12'],'8','9'],12]
const useful_another_array = another_array.flat(Infinity);
// console.log(useful_another_array);

// console.log(Array.isArray("Aman"));
// console.log(Array.from("Aman"));
// console.log(Array.from({name:"Aman"}));      //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));