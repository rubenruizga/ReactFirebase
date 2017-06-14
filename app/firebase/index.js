import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAqJUrgQoMBN_ie7lAXqJFTd_WJ2v0fCtk",
    authDomain: "webapps-d8692.firebaseapp.com",
    databaseURL: "https://webapps-d8692.firebaseio.com",
    projectId: "webapps-d8692",
    storageBucket: "webapps-d8692.appspot.com",
    messagingSenderId: "647470027785"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
