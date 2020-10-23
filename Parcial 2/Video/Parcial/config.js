/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyDzUa8-_V9ZvGSORsoUfG9WvNzbDfLLdTM",
    authDomain: "videopar-fbeda.firebaseapp.com",
    databaseURL: "https://videopar-fbeda.firebaseio.com",
    projectId: "videopar-fbeda",
    storageBucket: "videopar-fbeda.appspot.com",
    messagingSenderId: "350782691808",
    appId: "1:350782691808:web:93a34a90289e6e9e843385",
    measurementId: "G-4ECWJSKFKJ"
};
let app = Firebase.initializeApp(config);
export const db = app.database();