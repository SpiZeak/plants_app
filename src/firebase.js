import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth';
import 'firebase/messaging';

// Config
const firebaseConfig = {
	apiKey: 'AIzaSyD2NN88cDqWjS9KlOnqqnpciJGZouNLzus',
	appId: '1:976846012631:web:f3518ee84312535dcf7092',
	databaseURL: 'https://plants-fd8dd-default-rtdb.europe-west1.firebasedatabase.app/',
	projectId: 'plants-fd8dd',
	messagingSenderId: '976846012631',
};

// Initialize app
firebase.initializeApp(firebaseConfig);

// Activate SDK:s
export const db = firebase.database();
export const analytics = firebase.analytics();
export const performance = firebase.performance();
export const auth = firebase.auth();
export const messaging = firebase.messaging();
