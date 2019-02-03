import Firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCsQYEsKrVx-YDjgoXRsGNHg-dkRbvWayI",
    authDomain: "todo-vuejs-c3b00.firebaseapp.com",
    databaseURL: "https://todo-vuejs-c3b00.firebaseio.com",
    projectId: "todo-vuejs-c3b00",
    storageBucket: "todo-vuejs-c3b00.appspot.com",
    messagingSenderId: "668597909509"
};

Firebase.initializeApp(config)

export default {
    database: Firebase.database()
}
