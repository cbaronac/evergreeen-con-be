const mongoose = require('mongoose');
const URI = 'mongodb+srv://cbaronac:gvjEIT54@evergreen-con.n3q62.mongodb.net/evergreen-con?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;