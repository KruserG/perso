// Dotenv
require('dotenv').config({path:'./../.env'});


// Express.js
const express = require('express');
const app = express();
// Parsing to json type
app.use(express.json())
// Avoiding cross origin security problems
const cors = require('cors');
app.use(cors());

// Establishing a database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => {
    console.error(err);
  });

// Importing the exported models
const Like = require('./models/like');

// Returning all likes that exists in the database.
app.get('/api/', (req,res)=>{
  Like.find({}, (err, data) =>{
      if(err) {
        console.log(err);
        res.status(500).send();
      } 
      else {
      res.status(200).json(data);
      }
    });
  });

  // Returning likes that exists in the database of a specific project
app.get('/api/projectLikes/:project', (req,res)=>{
  Like.find({project:req.params.project}, (err, data) =>{
      if(err) {
        console.log(err);
        res.status(500).send();
      } 
      else {
      res.status(200).json(data);
      }
    });
  });

    // Returning the number of likes in a specific project
app.get('/api/projectLikesNumber/:project', (req,res)=>{
  Like.find({project:req.params.project}, (err, data) =>{
      if(err) {
        console.log(err);
        res.status(500).send();
      } 
      else {
      res.status(200).json(data.length);
      }
    });
  });

// Adding a like
app.post('/api/addLike', (req, res)=>{

  const like = Like(req.body);

  like.save((err,data)=> {
    if(err) return res.status(500).json(err);          
        res.status(201).json(data);
      });   

});

const PORT = process.env.PORT || 8800;
app.listen(PORT, ()=>{
   console.log(`Server started on ${PORT}...`)
})