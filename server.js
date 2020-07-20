const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use( express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    
    res.render('home',{
        nombre: 'mundo, como estan',
    });
});

app.get('/about',(req,res) => {
    
    res.render('about');
});


app.get('/data',(req,res) => {
    let message = "Este es un mensaje desde data";
    res.send(message);
});

app.listen(port, ()=>{
    console.log(`Este es un mensaje desde el puerto ${port}`);
});