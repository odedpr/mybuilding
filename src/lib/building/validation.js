/**
 * Created by odedpriva on 12/7/16.
 */

function* createBuilding(next) {

  this.checkBody('city').notEmpty().len(2, 30,'street needs to be between 2-30');
  this.checkBody('street').notEmpty().len(2, 30,'street needs to be between 2-30');
  this.checkBody('number').notEmpty().isInt();

  if (this.errors) {
    this.body = {validationErrors:this.errors};
    this.status = 422;
    return;
  }

  yield next;
}

function* getBuilding(next) {
  this.checkParams('id').isLength(24, 24, 'id needs to be 24 characters').isHexadecimal('id needs to be hex number');

  if (this.errors) {
    this.body = {validationErrors:this.errors};
    this.status = 422;
    return;
  }

  yield next;
}

function* updateBuilding(next) {

  this.checkBody('id').isLength(24, 24, 'id needs to be 24 characters').isHexadecimal('id needs to be hex number');
  this.checkBody('city').optional().len(2, 30,'city needs to be between 2-30');
  this.checkBody('street').optional().len(2, 30,'street needs to be between 2-30');
  this.checkBody('number').optional().isInt();


  if (this.errors) {
    this.body = {validationErrors:this.errors};
    this.status = 422;
    return;
  }

  yield next;

}

module.exports = {
  createBuilding,
  getBuilding,
  deleteBuilding: getBuilding,
  updateBuilding
};