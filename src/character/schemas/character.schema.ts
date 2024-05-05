import { Schema, model } from 'mongoose'

const characterSchema = new Schema({
    name: String,
    description: String,
    thumbnail: String
}, {
    timestamps: true
});

export default model("Character", characterSchema);


