const dbConfig = require("../config/db_config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./appmodel.js")(mongoose);

module.exports = db;
