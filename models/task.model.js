import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true , max: 50},
    description: { type: String, max: 200 },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
},{
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

export default Task;