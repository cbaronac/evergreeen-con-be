const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppSchema = new Schema({
  name: { type: String},
  port: { type: String},
  state: {type:String},
  typeApp: {type:String},
  lang: {type:String}
});

module.exports = mongoose.model('App', AppSchema);