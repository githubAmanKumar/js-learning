// iife (immediately invoked function)

(function chai(){ //named iife
    console.log("DB CONNECTED");
})(); //semicolon is necessary here otherwise iife dont know where to stop

((name)=>{ //simple iife
    console.log(`DB CONNECTED Two ${name}`);
})("Aman");