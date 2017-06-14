import firebase, {firebaseRef} from 'app/firebase/';

export var testAction = (id) => {
  return {
    type: 'TEST_ACTION',
    id
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: "Moment",
      completedAt: "MomentsAfter"
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};
