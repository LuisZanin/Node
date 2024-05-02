import { Schema, model } from 'mongoose'

const comicSchema = new Schema({
    title: String,
    description: String,
    release_date: Date,
    cover: String
}, 
{
    timestamps: true
});

export default model("Comics", comicSchema);






