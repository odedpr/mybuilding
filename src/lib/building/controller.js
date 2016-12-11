/**
 * Created by odedpriva on 10/26/16.
 */

const config = require('./../../config')
    , utils = require('../services/custom-utils')
    , logger = require('../services/logger')
    , Building = (require('../models/building'));



function* createBuilding() {
  let body = this.request.body;
  body.state = utils.getState();
  body._id = utils.generateSha([body.state, body.city, body.street, body.number]);
  console.log(body);
  let building = Building(body);
  try {

    let response = yield building.save();
    this.body = {status:'success',message:response};
    this.status = 200;

  } catch (error) {

    logger.error(error);
    this.body = {status:'error',message:error.message};
    this.status = 500;

  }

}

function* getBuilding() {
  let id = this.params.id;
  let document = yield Building.findById(id);
  this.body = document;
  this.status = 200;
}

function* deleteBuilding() {
  let id = this.params.id;
  this.body = yield Building.remove({_id:id});
  this.status = 200;
}

function* updateBuilding() {
  let body = this.request.body;
  this.body = yield Building.where({_id: body.id}).update(body);
  this.status = 200;
}

module.exports = {
  createBuilding,
  getBuilding,
  deleteBuilding,
  updateBuilding
};