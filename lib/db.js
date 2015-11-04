'use strict';

var mongodb = require('mongodb');

function getConnection(opts, cb) {
  mongodb.MongoClient.connect(opts.conn_str, function (err, db) {
    if (err) {
      return cb(err);
    }

    var collection = db.collection('migrations');
    cb(null, {
      connection: db,
      migrationCollection: collection
    });
  });
}

module.exports = {
  getConnection: getConnection
};