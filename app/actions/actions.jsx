import firebase, {firebaseRef} from 'app/firebase/';

export var testAction = (id) => {
  return {
    type: 'TEST_ACTION',
    id
  };
};

export var addData= (data) => {
  return {
    type: 'ADD_DATA',
    data
  };
};

export var startWriting = (text) => {
  return (dispatch, getState) => {
    var data = {
      text,
      completed: false,
      createdAt: "Moment",
      completedAt: "MomentsAfter"
    };
    var dataRef = firebaseRef.child('data').push(data);

    dataRef.then(() => {
      dispatch(addData({
        ...data,
        id: dataRef.key
      }));
    });
  };
};

export var startReading = (text) => {
  return (dispatch, getState) => {
    var dataRef = firebaseRef.child('data')

    return dataRef.once('value').then((snapshot) => {
      var data =snapshot.val() || {};
      var parsedData = [];

      Object.keys(data).forEach((dataId) => {
        parsedData.push({
          id: dataId,
          ...data[dataId]
        });
      });

      dispatch(addData(parsedData));
    });


    Object.keys()
    dataRef.then(() => {
      dispatch(addData({
        ...data,
        id: dataRef.key
      }));
    });
  };
};
