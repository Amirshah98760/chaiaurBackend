const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    // const param = req.body.param;
    // console.log(param);
res.send('Hello from Home route ');
});


app.get('/about', (req, res)=>{
res.send('Hello from About route');
});
app.get('/contact', (req, res)=>{
res.send('Hello from Contact route');
});


app.listen(port,() =>{
    console.log('The server is listening on port :', port);
});