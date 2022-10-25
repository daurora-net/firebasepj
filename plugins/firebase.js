import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyBvBf8saN1q9rWcKs0t1v8NpFY30TwiDMw",
    authDomain: "fir-pj-83e09.firebaseapp.com",
    projectId: "fir-pj-83e09",
    storageBucket: "fir-pj-83e09.appspot.com",
    messagingSenderId: "38633739554",
    appId: "1:38633739554:web:35bddc9d281cf67266c17b",
    measurementId: "G-2R9TECEHB7"
    }
  )
}
  
export default firebase