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
   
},
{timestamps:true}
)

module.exports = mongoose.model("task", taskModel)