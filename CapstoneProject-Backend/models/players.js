import mongoose from "mongoose";


//Mongoose Schema for players
const playerSchema = new mongoose.Schema({
    fullname: {type: "string", required: true},
    username: {type: "string", required: true, unique: true},
    email: {type: "string", required: true, unique: true},
    password: {type: "string", required: true},
    verified: {type: "string", required: true, default: false}
})

//Mongoose Model for players
const players = mongoose.model("players", playerSchema)


//Exporting the player model
export default players;


