
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);        // Example =>             /about.html  GET 
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';  // providing the html locations

    switch (req.url) {
        case '/':
            path += 'index.html';   // default location 
            res.setStatus = 200;                     //     --------       Status code    ----------
            break;                                  // 100 Range - informatinal response
        case '/about':                              // 200 Range - success code
            path += 'about.html';                   // 300 Range - code for redirects
            res.setStatus= 200;                     // 400 Range - user or client error code
            break;                                  // 500 Range - server error code
        case '/services':                           
            path += 'services.html';                
            res.setStatus= 200;                     
            break;  
        case '/about-me':
            res.setStatus = 301;
            res.setHeader('Location','/about');
            res.end();
            break;                               
        default:
            path += '404.html';
            res.setStatus =404; 
            break;
    }

    fs.readFile(path, (error, data) => {    // data is the web page passed from that path
        if (error) {
            console.log(error);
            res.end();               //  ** NOTE ** : every response must have an end method
        } else {
            // res.write(data);
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening to request on port 3000');
});

