/**
 * Created by odedpriva on 10/25/16.
 */

const koa             = require('koa')
    , app             = koa()
    , router          = require('koa-router')()
    , validation      = require('./validation')
    , controller      = require('./controller')
    ;

app.use(require('koa-bodyparser')());
app.use(router.allowedMethods());
app.use(router.routes());

router.post('/building', validation.createBuilding, controller.createBuilding);
router.get('/building/:id', validation.getBuilding, controller.getBuilding);
router.put('/building', validation.updateBuilding, controller.updateBuilding);
router.delete('/building/:id', validation.deleteBuilding, controller.deleteBuilding);

module.exports = app;
