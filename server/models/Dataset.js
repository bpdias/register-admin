const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema
const DatasetSchema = new Schema({
  id: {
    type: String,
    default: new Date().getTime()
  },
  name: {
    type: String,
    require: true
  },
  data_type: {
    type: String,
    require: true
  },
  blacklist: {
    type: Boolean,
    default: false,
  },
  dataset: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dataset = mongoose.model('Dataset', DatasetSchema);