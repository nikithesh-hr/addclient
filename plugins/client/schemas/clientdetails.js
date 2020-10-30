'use strict';

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
const { Schema } = mongoose;

const valid_types = ['text'];

//Define a schema
const schema = new Schema(
  {
    clientname: { type: String, required: true },
    dateofmeeting: { type: String, required: true },
    message: { type: String, required: true },
  }  
   
);


module.exports = mongoose.model('announcements', schema);
