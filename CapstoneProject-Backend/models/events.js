import mongoose from "mongoose";


// Mongoose Schema for events
const eventSchema = new mongoose.Schema({
    name: { type: "string", required: true },
    date: { type: "string", required: true },
    location: { type: "string", required: true },
    matchlocation: { type: "string"},
    description: { type: "string", required: true },
    createdAt: { type: Date, default: Date.now }
});

// Mongoose Model for events
const events = mongoose.model("events", eventSchema);


// Exporting the event model
export default events;


