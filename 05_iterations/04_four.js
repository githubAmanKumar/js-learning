const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple',
}

for (const key in myObject) {
    // console.log(key,"=>",myObject[key]);
}

const programming = ['js','py','rb','java','cpp']

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map();
// map.set('IN',"India");
// map.set('USA',"United States Of America");
// map.set('Fr',"France");
// map.set('IN',"India");

// for (const key in map) {
//     console.log(key); // map not iterable in for-in
// }