"use strict";

const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");
const { Schema } = mongoose;

//Define a schema
const schema = new Schema({
  clientname: String,
  dateofmeeting: String,
  message: String,
});

module.exports = mongoose.model("clientdetails", schema);
