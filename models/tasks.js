const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, "must provide name"],
        maxLength : [20, "name cannot be more than 20 character"],
        trim : true,  
    },
    isCompleted:{
        type: Boolean,
        default : false,
    }
})


module.exports = mongoose.model('task',taskSchema)