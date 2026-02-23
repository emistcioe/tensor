// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { getDocs, collection } from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// async function fetchFirestoreData() {
//   const snapshot = await getDocs(collection(db, "applications"));
//   const data = snapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data()
//   }));

//   console.log(JSON.stringify(data, null, 2));
//   return data;
// }

// fetchFirestoreData();