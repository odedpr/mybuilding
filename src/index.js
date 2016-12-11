/**
 * Created by odedpriva on 10/26/16.
 */

'use strict';

require('./config');
const packageJson = require('../package.json')
    , koa        = require('koa')
    , router = require('koa-router')()
    , mount = require('koa-mount')
    , db = require('./lib/services/database')
    , GIT_COMMIT = process.env.GIT_COMMIT || 'no git commit';

let app = koa();
require('koa-validate')(app);


// connecting to db
db();

// app configuration
app.name = packageJson.name;

//Mini apps
const building  = require('./lib/building');

// Response Handlers
app.use(require('koa-cors')({credentials: true}));
app.use(require('koa-bodyparser')());
app.use(router.allowedMethods());
app.use(router.routes());

// Mount child apps
app.use(mount(building));

//Health Route
function health() {
  this.body = {
    msg:'up',
    commit:GIT_COMMIT
  };
  this.status = 200;
}

router.get('/health', health);

app.listen(8000);
