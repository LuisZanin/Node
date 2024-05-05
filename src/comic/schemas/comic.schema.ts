import { Schema, model } from 'mongoose'

const comicSchema = new Schema({
    title: String,
    description: String,
    startYear: Date,
    thumbnail: String
}, 
{
    timestamps: true
});

export default model("Comics", comicSchema);






