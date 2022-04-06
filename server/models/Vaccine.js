const { Schema, model } = require("mongoose");

const vaccineSchema = new Schema ({
   vaccineName: {
       type: String
   },
   administeredDate: {
       type: String
   },
   location: {
       type: String
   },
   
})
const Vaccines = model('Vaccines', vaccineSchema)
module.exports=Vaccines