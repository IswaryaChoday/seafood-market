import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6Q-7qS6_og2hiFq6Z_ZpdOgjSURjpars",
    authDomain: "catch-of-the-day-95863.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-95863.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
