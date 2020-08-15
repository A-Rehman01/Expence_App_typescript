importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJ23FuYUAR8u2eHHgjpm1VzIkU1lnn4y4",
    authDomain: "expenxeapptypescript.firebaseapp.com",
    databaseURL: "https://expenxeapptypescript.firebaseio.com",
    projectId: "expenxeapptypescript",
    storageBucket: "expenxeapptypescript.appspot.com",
    messagingSenderId: "185319951445",
    appId: "1:185319951445:web:354922dd6d84258fd618dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.messaging();