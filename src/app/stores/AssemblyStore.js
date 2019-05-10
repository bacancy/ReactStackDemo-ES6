var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

// Define initial data points
var _datas = {}, _cartVisible = false;

function add(sku, update) {
  update.quantity = sku in _datas ? _datas[sku].quantity + 1 : 1;
  _datas[sku] = _.extend({}, _datas[sku], update)
}

function removeItem(sku) {
  delete _datas[sku];
}

var Assembly = _.extend({}, EventEmitter.prototype, {
  getData: function () {
    return _datas;
  },
  getDataCount: function () {
    return Object.keys(_datas).length;
  },
  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

module.exports = Assembly;
