'use strict';

const env = process.env.NODE_ENV || 'development';

const config = require('../knexfile.js');
const knex = require('knex')(config[env]);

knex.migrate.latest([config])
  .then(() => {
    console.log('knex migrate finished');
    knex.destroy();
  });

const bookshelf = require('bookshelf')(knex);

const User = require('./models/User.js')(bookshelf);

User.where('username', 'sharaal').fetch().then((user) => {
  console.log('user with username "sharaal" fetched');
  console.log(user.toJSON());
}).catch((err) => {
  console.error(err);
});
