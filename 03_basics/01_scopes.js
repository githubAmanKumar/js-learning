var c = 309
let a = 100
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log(a);
}
// console.log(a);
// console.log(b);
// console.log(c);

//next

function one(){
    const username = "Aman"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    
    // console.log(website)
    two()
}
// one()

if(true){
    const user = "Aman"
    if(user==="Aman"){
        const web = " youtube"
        // console.log(user + web)
    }
    // console.log(web)
}
// console.log(user)



//++++++++++Interesting+++++++++++++++++hoist
console.log(addOne(5))
function addOne(num){
    return num + 1
}

addTwo(5)
const addTwo= function(num){
    return num + 2
}
