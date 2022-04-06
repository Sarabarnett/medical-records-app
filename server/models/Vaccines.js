const { Schema, model } = require("mongoose");

const vaccineSchema = new Schema({
  //This schema is similar to a USIS database
  // this is for Users who log into the website

  userId: {
    // this will be referencing the userId in the users table
    // and will be populating on the vaccine form associate the users and vaccines
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
