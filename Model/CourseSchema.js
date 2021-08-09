const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  coursename: String,
  coursecategoryname: String,
  instructorname: String,
  instructorimage: String,
  courselevel: {
    type: Array,
    // unique: true,
  },
  language: {
    type: Array,
    // unique: true,
  },
});
module.exports = mongoose.model("Course", courseSchema);
