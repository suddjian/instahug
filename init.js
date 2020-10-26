firebase.initializeApp({
  apiKey: "AIzaSyCoVHrLys0YDQE50L0nZfn4ehXbCGmXdJ0",
  authDomain: "instahug-3a6a0.firebaseapp.com",
  databaseURL: "https://instahug-3a6a0.firebaseio.com",
  projectId: "instahug-3a6a0",
  storageBucket: "instahug-3a6a0.appspot.com",
  messagingSenderId: "799821867386",
  appId: "1:799821867386:web:deb7b756272724cf314ec3",
});

window.firestore = firebase.firestore();

firebase.auth().signInAnonymously();

firebase.auth().onAuthStateChanged((user) => {
  if (user && window.onUserReady) window.onUserReady(user);
});
