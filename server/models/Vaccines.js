const { Schema, model } = require("mongoose");

const vaccineSchema = new Schema({
  //This schema is similar to a USIS database
  // this is for Users who log into the website

  vaccineId: {
    type: String,
  },
  vaccineName: {
    type: String,
  },
  administedDate: {
    type: String,
  },
  location: {
    type: String,
  },
});

const Vaccines = model("Vaccines", vaccineSchema);

module.exports = Vaccines;
