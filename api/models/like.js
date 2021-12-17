const mongoose = require('mongoose');

const LikesSchema = new mongoose.Schema({
    cookie:{
        type:String,
        unique:true,
        required:true
    },
    ip:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    project:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Like', LikesSchema );

