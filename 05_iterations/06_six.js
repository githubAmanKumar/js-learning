const coding = ["js", "rb", "java", "python", "cpp"]

const values = coding.forEach(function (item) {
    // console.log(item);
    // return item //forEach do not return anything
})

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (nums)=> {
//     return nums>4
// } )

const newNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
});

// console.log(newNums);

const books = [
    { tilte: 'book1', genre: 'fiction', publish: 1981, edition: 2004 },
    { tilte: 'book2', genre: 'nonFiction', publish: 1992, edition: 2008 },
    { tilte: 'book3', genre: 'history', publish: 1999, edition: 2007 },
    { tilte: 'book4', genre: 'nonFiction', publish: 1989, edition: 2010 },
    { tilte: 'book5', genre: 'science', publish: 2009, edition: 2014 },
    { tilte: 'book6', genre: 'fiction', publish: 1987, edition: 2010 },
    { tilte: 'book7', genre: 'history', publish: 1986, edition: 1996 },
    { tilte: 'book8', genre: 'science', publish: 2011, edition: 2016 },
    { tilte: 'book9', genre: 'nonFiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((bk)=>bk.genre=="history");
const userBooks = books.filter((bk)=>bk.publish>2000);
console.log(userBooks);