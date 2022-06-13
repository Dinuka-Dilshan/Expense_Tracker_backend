import mongoose from 'mongoose';

const {Schema} = mongoose;

const itemSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    amount:{
        type:Number,
        required: true,
    },
    date:{
        type: String,
        required: true,
        trim: true,
    }

},{timestamps:true});

export default mongoose.model('item',itemSchema);