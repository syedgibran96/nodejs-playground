const fs = require('fs');



// ----------------------FOR HANDELING READING AND WRITING OF FIELS ------------------------------------------

fs.readFile("example.txt", (error,data) => {   
    if (error){
    console.log(error);
    }else {
        console.log(data.toString());   //converts to sting ie  UTF-8 format 
    }
    
});

fs.writeFile("./write.txt", 'written using writeFile', () => {
    console.log('Writting to the file');

});

console.log('reading from the write file');

fs.readFile('./write.txt', (error, data) => {
    if (error){
        console.log(error);
    }else {
        console.log(data.toString());
    }
});
 


