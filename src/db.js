import firebase from 'firebase';

export const db = firebase
	.initializeApp({ databaseURL: 'https://plants-fd8dd-default-rtdb.europe-west1.firebasedatabase.app/' })
	.database();
