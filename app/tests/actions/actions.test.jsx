import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);
describe('Actions', () => {

  it('should generate add new data action', () => {
    var action = {
      type: 'ADD_DATA',
      data: {
        text: "Text",
        completed: false,
        createdAt: "Moment",
        completedAt: "MomentsAfter"
      }
    };
    var res = actions.addData(action.data)

    expect(res).toEqual(action);
  });

  it('should create data and dispatch ADD_DATA', (done) => {
    const store = createMockStore({});
    const dataText = 'My text from test';

    store.dispatch(actions.startWriting(dataText)).then(() => {
      const actions = store.getActions();
      expect(actions[0].toInclude({
        type: 'ADD_DATA'
      }));
      expect(actions[0].data).toInclude({
        text: dataText
      })
      done();
    }).catch(done);
  });
});
