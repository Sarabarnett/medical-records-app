const { Schema, model } = require("mongoose");

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
  primaryDoctor: {
    type: String,
    required: "If this is not your Primary care provider, please enter N/a",
  },
  phoneNumber: {
    type: Int,
    required: "Please provide a valid phone number",
  },
});

const Clinic = model("Clinic", clinicSchema);

module.exports = Clinic;
