import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth';
import 'firebase/messaging';

// Config
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	appId: import.meta.env.VITE_APP_ID,
	databaseURL: import.meta.env.VITE_DB_URL,
	projectId: import.meta.env.VITE_PROJECT_ID,
	messagingSenderId: import.meta.env.VITE_MESSAGING_ID,
};

// Initialize app
firebase.initializeApp(firebaseConfig);

// Activate SDK:s
export const db = firebase.database();
export const analytics = firebase.analytics();
export const performance = firebase.performance();
export const auth = firebase.auth();
export const messaging = firebase.messaging();
