/**
 * Created by odedpriva on 10/25/16.
 */
const logger = require('../lib/services/logger');

let env;

env = (process.env.NODE_ENV == 'test' || !process.env.NODE_ENV) ? 'development' : process.env.NODE_ENV ;

logger.info(`loading configuration fot ${env} environment`);

const config = require('simpler-config')
    .load({
      development: require('./development'),
      staging:     require('./staging'),
      production:  require('./master')
    }[env]);

module.exports = config;