const express = require('express');
const app = express();

const logger = (req, res, next)=>{
    req.msg = `\nThis is from Middleware!!`;
    next()
}

const auth = (req, res, next)=>{
    if(req.query.name === 'Peter'){
        next()
    }else{
        res.send('Access Denied');
    }
}

app.use(logger);
app.get('/', (req, res)=>{
    res.send(`<h3>Hello World</h3>${req.msg}`);
});

app.get('/admin', auth, (req, res)=>{
    res.send(`<h3>Admin Page</h3>${req.msg}`);
});



app.listen(5000, ()=>console.log(`Sevrer is running on http://localhost:5000`));