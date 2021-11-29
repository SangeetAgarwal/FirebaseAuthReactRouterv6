// Import the functions you need from the SDKs you need
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products th`at you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, 
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID, 
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

console.log(firebaseConfig);

let app: FirebaseApp 
if (getApps().length === 0) {
	// Initialize Firebase
	 app = initializeApp(firebaseConfig);
} else {
	// else return what we already have
	app = getApps()[0];
}

export { app };
