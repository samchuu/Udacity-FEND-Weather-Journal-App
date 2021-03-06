// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const { response } = require('express');

const app=express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

const port=8000;

const server = app.listen(port, () => {
    console.log(`localhost running on port: ${port}`);
})

//get method
app.get('/', (req,res) => {
    res.send(projectData);
});
 
//post method
app.post('/new', (req, res) => {
    let data=req.body;
    //key-value pairs
        date = data.date;
        temp = data.temp;
        feel = data.feeling;
    
        res.send(projectData);
});

