//First require the express 
const express = require('express');
const app = express();
const port = 5500;

const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');
const path = require('path');

app.use(express.urlencoded());

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);


app.use(expressLayouts);
app.use(express.static('./assets'));


app.use('/', require('./routes/index'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');










// app.use('/', (req,res) => {
//     res.send('<h1>Cool Go</h1>');
// });

//Error handling...
app.listen(port, function(err){
    if(err){
    console.log(`Error: ${err}`);
   }
    console.log(`Server is running on port : ${port}`);
});