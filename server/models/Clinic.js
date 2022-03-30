const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const clinicSchema = new Schema({
  clinicName: {
    type: String,
    required: "Please provide a clinic for your records",
    minlength: 1,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (timestamp) => dateFormat(timestamp),
  },
  userName: {
    type: String,
    required: true,
  },
});

const Clinic = model("Clinic", clinicSchema);

module.exports = Clinic;
