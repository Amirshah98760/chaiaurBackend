const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

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
app.get('/login', (req, res)=>{
res.send('<h1>Login page</h1>');
});

app.get('/jokes', (req, res)=>{

    const jokes = [{
        id:1,
        joke: "Why don't scientists trust atoms? Because they make up everything!"
    },{
        id:2,
        joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
    },
    {
        id:3,
        joke: "Why don't skeletons fight each other? They don't have the guts!"
    },
    {
        id:4,
        joke: "What do you call fake spaghetti? An impasta!"
    },
    {
        id:5,
        joke: "Why did the bicycle fall over? Because it was two-tired!"
    }];
    res.send(jokes);

});

// app.get('/newArr',(req, res)=>{
// const arr1 = [{
//     id:1,
//     name:"Amir shah",
//     Address:'Mattani Azakhel Peshawar'
// },
// {
//     id:2,
//     name:"Obaid shah",
//     Address:'Mattani Azakhel Peshawar'  
// },
// {
//       id:3,
//     name:"Junaid shah",
//     Address:'Mattani Azakhel Peshawar'
// },
// {
//       id:4,
//     name:"Rahat shah",
//     Address:'Mattani Azakhel Peshawar'
// }];

// res.send(arr1[2]);
// });

app.get('/signUp', (req, res)=>{
    res.send("The User is successfully Register");
});

app.listen(port,() =>{
    console.log('The server is listening on port :', port);
});

