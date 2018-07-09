import mongoose from 'mongoose';

const Todo = mongoose.model('Todo', {
    text: String,
    checked: Boolean,
    // _id: String,
    // __v: Number
});

export default Todo;