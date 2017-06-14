var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('firebaseReducer', () => {
    it('should add new data', () => {
      var action = {
        type: 'ADD_DATA',
        data: {
          text: "Text",
          completed: false,
          createdAt: "Moment",
          completedAt: "MomentsAfter"
        }
      };
      var res = reducers.firebaseReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.data);
    });
  });
});
