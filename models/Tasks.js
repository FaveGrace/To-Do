const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Started', 'In-Progress', 'On-Hold', 'Completed', 'Cancelled'], 
        default: 'Started' 
    }
}, { timestamps: { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
    } 
});

module.exports = mongoose.model('Task', taskSchema);
