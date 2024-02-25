const coding = ["js","rb","java","python","cpp"]

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

function printMe(val){
        console.log(val);
}

// coding.forEach(printMe);

// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// })

const myCoding = [
    {
        file:'javascript',
        fileName:'js'
    },
    {
        file:'java',
        fileName:'java'
    },
    {
        file:'python',
        fileName:'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.file,"=>",item.fileName);
})