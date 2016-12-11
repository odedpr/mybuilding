/**
 * Created by odedpriva on 11/2/16.
 */
'use strict';
const _ = require('lodash')
    , mongoose = require('mongoose')
    , crypto = require('crypto')
    , config = require('../../config');


function generateSha(list) {
  return crypto.createHash('sha1').update(list.join()).digest('hex').substring(0,24);

}

function generateDocumentID(list) {
  return new mongoose.mongo.ObjectId(generateSha(list));
}

function getState() {
  return 'IL';
}

module.exports = {
  generateSha,
  generateDocumentID,
  getState
}