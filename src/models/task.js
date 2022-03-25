const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  type: { type: String},
  model: { type: String},
  config: {type:String},
  lat: {type:String},
  lon: {type:String}
});

module.exports = mongoose.model('Task', TaskSchema);