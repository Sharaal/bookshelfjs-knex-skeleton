'use strict';

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: 'data/db.sqlite3' },
    useNullAsDefault: true,
  },
  production: {},
};
