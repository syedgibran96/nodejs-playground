

//global objects 

setTimeout(() => {   
    console.log('logging msg as timeout of 3s');  // this runs for only once
    
}, 3000);

setInterval(() => {
    console.log('loggin msg every 2s');     // this runs in continously every 2 seconds!
}, 2000);

console.log(__dirname); // returns the directries name

console.log(__filename); // returns the file name along with the path 
