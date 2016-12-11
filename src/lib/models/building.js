/**
 * Created by odedpriva on 12/6/16.
 */
const mongoose = require('mongoose');

let buildingSchema = mongoose.Schema({
  state:{
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Building', buildingSchema);
