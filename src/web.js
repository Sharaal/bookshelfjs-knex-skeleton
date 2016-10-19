'use strict';

const env = process.env.NODE_ENV || 'development';

const config = require('../knexfile.js');
const knex = require('knex')(config[env]);

knex.migrate.latest([config])
  .then(() => { console.log('knex migrate finished'); });
