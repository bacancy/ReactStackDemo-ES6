var AppDispatcher = require('../dispatcher/AppDispatcher');
var AssemblyConstants = require('../constants/AssemblyConstants');

// Define action methods
var AssemblyActions = {
  receiveData: function (data) {
    AppDispatcher.handleAction({
      actionType: AssemblyConstants.RECEIVE_DATA,
      data: data
    })
  },

  selectData: function (index) {
    AppDispatcher.handleAction({
      actionType: AssemblyConstants.SELECT_DATA,
      data: index
    })
  },

  addData: function (sku, update) {
    AppDispatcher.handleAction({
      actionType: AssemblyConstants.DATA_ADD,
      sku: sku,
      update: update
    })
  },

  removeData: function (sku) {
    AppDispatcher.handleAction({
      actionType: AssemblyConstants.DATA_REMOVE,
      sku: sku
    })
  },

};

module.exports = AssemblyActions;
