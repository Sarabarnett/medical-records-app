const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const clinicSchema = new Schema({
  clinicname: {
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
  username: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    
  },
  phonenumber: {
    type: String,
    
  }
});

const Clinic = model("Clinic", clinicSchema);

module.exports = Clinic;
