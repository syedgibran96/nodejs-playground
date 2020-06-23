// ------- handeling existing files and folders  ----------

const fs = require('fs');



if (!fs.existsSync('./assets')) {       // if the folder does not exists do the following .... (make assests folder)
    fs.mkdir('./assets', (error) => {           // "mkdir" => to create a directory 
        if (error) {
            console.log(error);

        } else {
            console.log('folder created');
        }
    });
} else {                                    // if the folder exists then remove the folder "assests" 
    fs.rmdir('./assets', (error) => {           // "rmdir" => to remove the directory
        if (error) {
            console.log(error);
        } else {
            console.log('folder removed');
        }
    });
}


//----------------- DELETEING A FILE --------------------------------

if (fs.existsSync('./del.txt')) {            // checking if the file exists then do the folllowing ...
    fs.unlink('./del.txt', (error) => {      // "unlink" => used to delet the file
        if (error) {
            console.log(error);
        } else {
            console.log('del file deleted');
        }
    });
}