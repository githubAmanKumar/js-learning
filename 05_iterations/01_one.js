// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("five is best number");
    }
    // console.log(element);

}

console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`InnerLoop ${i} and Innerloop ${j}`);
        // console.log(i + "*" + j + "=" + i * j);

    }

}

const myArray = ["Hanuman","Superman","Batman"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}

for (let index = 0; index <= 20; index++) {
    if (index==5) {
//         console.log("Detected 5");
//         break;
    }
//     console.log(`Value is ${index}`);    
}

for (let index = 0; index <= 20; index++) {
    if (index==5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`Value is ${index}`);    
}
