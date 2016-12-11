/**
 * Created by odedpriva on 12/6/16.
 */

const mongoose = require('mongoose')
    , config = require('../../config')
    , logger = require('./logger');

mongoose.Promise = require('bluebird');

function db_connection() {
  mongoose.connect(config.mongo.url);
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(val) {
    logger.debug('connected to mongo');
  });
}

module.exports = db_connection;

