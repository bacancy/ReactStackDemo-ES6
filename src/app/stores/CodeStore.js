var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AssemblyConstants = require('../constants/AssemblyConstants');
var _ = require('underscore');

// Define initial data points
var _data = {}, _selected = null,_datacount=0;

// Method to load data from mock API
function loadData(data) {
  _data = data[0];
  _selected = data[0].variants[0];
  _datacount=data.length;
}

function setSelected(index) {
  _selected = _data.variants[index];
}
var CodeStore = _.extend({}, EventEmitter.prototype, {
  getData: function () {
    return _data;
  },
  getCount: function () {
    return _datacount;
  },
  getSelected: function () {
    return _selected;
  },
  emitChange: function () {
    this.emit('change');
  },
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  var action = payload.action;
  var text;
  switch (action.actionType) {
    // Respond to RECEIVE_DATA action
    case AssemblyConstants.RECEIVE_DATA:
      loadData(action.data);
      break;
    case AssemblyConstants.SELECT_DATA:
      setSelected(action.data);
      break;
    default:
      return true;
  }
  // If action was responded to, emit change event
  CodeStore.emitChange();
  return true;
});

module.exports = CodeStore;
