const mongoose = require('mongoose')

const taskModel = new mongoose.Schema({
    taskName:{type: String,
        required: [true, "name is required for the task"]        
    },
    deadline:{
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    category:{
        type: String,
        required: true
    }
   
},
{timestamps:true}
)

module.exports = mongoose.model("task", taskModel)