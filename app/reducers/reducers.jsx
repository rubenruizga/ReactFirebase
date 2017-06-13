var uuid = require('node-uuid');
var moment = require('moment');

export var firebaseReducer = (state = [], action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return ({
        test: "test"
      });
    default:
      return state;
  }
};
