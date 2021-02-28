import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth';
import 'firebase/messaging';

export const db = firebase
	.initializeApp({ databaseURL: 'https://plants-fd8dd-default-rtdb.europe-west1.firebasedatabase.app/' })
	.database();
