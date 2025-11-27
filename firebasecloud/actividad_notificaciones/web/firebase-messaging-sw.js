importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCNtNKk5aGKfBFaLIMGSaJ3vlJvkJlUMHo",
  authDomain: "fir-3e617.firebaseapp.com",
  projectId: "fir-3e617",
  storageBucket: "fir-3e617.appspot.com",
  messagingSenderId: "37080394932",
  appId: "1:37080394932:web:0df07cea14a6d97028bbe1",
});

const messaging = firebase.messaging();
