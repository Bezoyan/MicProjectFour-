const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let todoSchema = Schema({
      name:  String,
      text : String
});


module.exports = mongoose.model('todo', todoSchema);
