const mongoose = require('mongoose');

const LikesSchema = new mongoose.Schema({
    ip:{
        type:String,
        required:true,
        unique:true,
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

