var uuid = require('node-uuid');
var moment = require('moment');

export var firebaseReducer = (state = [], action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return ({
        ...sate,
        text: "text"
      });

      case 'ADD_TODO':
        return [
          ...state,
          action.todo
        ];
    default:
      return state;
  }
};
