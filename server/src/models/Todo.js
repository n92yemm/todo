import mongoose from 'mongoose';

const Todo = mongoose.model('Todo', {
    text: String,
    checked: Boolean,
});

export default Todo;