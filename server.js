const express = require ('express');
const database = require ('./database/dbconn');
const path = require ('path');

const app = express();

const port = 8000;

//setting template engine 
app.set('view engine', 'ejs');

//setting public path 
app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/',(req ,res)=>{
    res.render('index');
})

app.get('/about',(req, res)=>{
    res.render('about');
})


app.get('/contact',(req, res)=>{
    res.render('contact')
})

app.get('/services',(req, res)=>{
    res.render('services');
})

app.get('/ourcourse',(req, res)=>{
    res.render('ourcourse');
})


app.listen(port,(req,res)=>{
    console.log(`Server is running on port no : ${port}`)
})



