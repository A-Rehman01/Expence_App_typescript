//yarn add firebase
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBJ23FuYUAR8u2eHHgjpm1VzIkU1lnn4y4",
  authDomain: "expenxeapptypescript.firebaseapp.com",
  databaseURL: "https://expenxeapptypescript.firebaseio.com",
  projectId: "expenxeapptypescript",
  storageBucket: "expenxeapptypescript.appspot.com",
  messagingSenderId: "185319951445",
  appId: "1:185319951445:web:354922dd6d84258fd618dc"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function FirebaseNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission)
    if (permission === "granted") {
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
          console.log("TOKEN")
          console.log(currentToken);
          prompt('Token',currentToken)
        } else {
          console.log('No Instance ID token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    }
  })
}