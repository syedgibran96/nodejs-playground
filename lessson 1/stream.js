const fs = require('fs');

// -------------------------------- STREAMS ----------------------------------
// stream are using to start reading the data, before its being loading ie using is as the chunks arrive



const readStream = fs.createReadStream("./data.txt", {encoding: 'utf8'});  //creating stream with enocoding

const writeStream = fs.createWriteStream("./chunkFile.txt"); // creating a stream to write the chunk to a different file => chunkFile.txt



readStream.on('data', (chunk) => {    // using the "readstream.on()" object we can read the chunks 
    console.log("----------------NEW CHUNK ------------------------------ \n \n");
    console.log(chunk);

    writeStream.write("\n\n -------------------- NEW CHUNK ------------------------------ \n\n"); // . write() to write 
    writeStream.write(chunk);

});
 
// -------------------          PIPING      --------------------------------

readStream.pipe(writeStream);  //piping is the same as above code