import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getRemoteConfig } from 'firebase/remote-config';

const firebaseApp = initializeApp({
	apiKey: 'AIzaSyBDGXSECewJd_SeBX4dCX47rNBUcEX3LDg',
	authDomain: 'votify-kiranbansode.firebaseapp.com',
	projectId: 'votify-kiranbansode',
	storageBucket: 'votify-kiranbansode.appspot.com',
	messagingSenderId: '252887947669',
	appId: '1:252887947669:web:e9225503bd952c011f7e9c',
	measurementId: 'G-7Y3BN5M16E',
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const cloudFunctions = getFunctions(firebaseApp);
export const storage = getStorage(firebaseApp);
export const remote = getRemoteConfig(firebaseApp);

if (location.hostname === 'localhost') {
	connectAuthEmulator(auth, 'http://localhost:9099');
	connectFirestoreEmulator(firestore, 'localhost', 8080);
	connectStorageEmulator(storage, 'localhost', 9199);
	connectFunctionsEmulator(cloudFunctions, 'localhost', 5001);
}
