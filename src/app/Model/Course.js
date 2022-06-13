
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
  name: String,
  img: String,
  desc: String
});
 
// module.exports = mongoose.model("Course",Title , "courses");

module.exports=mongoose.model("course",course);