const http = require('http');
const port = process.env.PORT || 5000;


http
.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(`<h3>Hello World</h3>`);
})
.listen(port, ()=>console.log(`Server is running on http://localhost:${port}`))