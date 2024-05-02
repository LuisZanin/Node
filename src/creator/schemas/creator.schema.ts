import { Schema, model } from 'mongoose'

const creatorSchema = new Schema({
    name: String,
    duty: String,
    comicsWorked: String
}, 
{
    timestamps: true
});

export default model("Creators", creatorSchema);






