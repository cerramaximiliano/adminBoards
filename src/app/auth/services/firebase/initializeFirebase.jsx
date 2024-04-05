import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import firebaseConfig from './firebaseAuthConfig';
/**
 * Initialize Firebase
 */
export const firebaseApp = firebase.initializeApp(firebaseConfig);
/**
 * Firebase App initialization check
 */
let initialized = false;
try {
	firebase?.auth();
	initialized = true;
} catch (e) {
	// eslint-disable-next-line no-console
	console.error(e);
}
console.log('INITIALIZEFIREBASE', initialized)
export const firebaseInitialized = initialized;