var AssemblyActions = require('../actions/AssemblyActions');

module.exports = {
  getData: function () {
    var data = JSON.parse(localStorage.getItem('data'));
    AssemblyActions.receiveData(data);
  }

};
