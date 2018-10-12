const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  contactInfo: {
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    organization: String,
    jobTitle: String,
    comments: String
  },
  pollId: String,
  results: Object
});

module.exports = mongoose.model('Result', ResultSchema);
