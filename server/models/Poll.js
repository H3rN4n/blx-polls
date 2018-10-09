const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PollSchema = new Schema({
  title: String,
  questions: Array
});
module.exports = mongoose.model('Poll', PollSchema);
