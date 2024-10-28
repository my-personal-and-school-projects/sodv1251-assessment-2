import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topicsCovered: {
    type: [String],
    default: [], //Set default topics to an empty array
  },
  location: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    enum: ["In-Person", "Virtual", "Hybrid"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Scheduled", "Ongoing", "Completed", "Canceled"],
    default: "Pending", //Set default status to "Pending"
  },
  maxCapacity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  organizerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organizer",
    required: true,
  },
  img_url: {
    type: String,
    default: "https://placedog.net/500/380",
  },
  attendees: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Attendee",
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
