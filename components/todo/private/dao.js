const mongoose = require('mongoose');
require('./model');
const BaseDao = require('./../../core/base-dao');
const con = require('./../../core/db-connection');

class todoDAO extends BaseDao {
    constructor() {
      super(con.model('todo'));
    }
}
module.exports = new todoDAO();
