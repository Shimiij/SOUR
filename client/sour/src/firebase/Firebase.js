// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, deleteObject, ref, uploadBytes, getDownloadURL  } from "firebase/storage"
import { getDatabase } from 'firebase/database';
import { getFirestore } from '@firebase/firestore'
import { collection } from "firebase/firestore";
import { v4 } from 'uuid'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYyVj-pDpv8dGWCB3pq8MCsCrZWl0c3yI",
  authDomain: "sour-a4806.firebaseapp.com",
  projectId: "sour-a4806",
  storageBucket: "sour-a4806.appspot.com",
  messagingSenderId: "833372325953",
  appId: "1:833372325953:web:93f04337b66b7f81a41ec0",
  measurementId: "G-8DLWCQ4CG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app)

// Initialize Refs
export const rsoCollectionRef = collection(db, 'RSO')
export const rsosendCollectionRef = collection(db, 'RSOsend')

export async function uploadPDFAndGetURL(file , fileName )  {
    const fileRef = ref(storage, fileName)
    try {
      const snapshot = await uploadBytes(fileRef, file) // Upload the PDF to Firebase Cloud Storage
      const downloadURL = await getDownloadURL(snapshot.ref) // Get the download URL of the uploaded PDF
      return downloadURL
    } catch (error) {
      throw error;
    }
}


// Helper Functions
export function createFileName(file) {
    return `RSO/${file.name + v4()}`
}
