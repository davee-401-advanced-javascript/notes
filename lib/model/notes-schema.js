'use strict';

const mongoose = require('mongoose');

const notesDefinition = mongoose.Schema({
  text: {type: String, required: true},
  category: {type: String, required: true},
});

notesDefinition.pre('validate', function() {
  this.text = this.text.toLowerCase();
  this.category = this.category.toLowerCase();
});

module.exports = mongoose.model('notecollection', notesDefinition);