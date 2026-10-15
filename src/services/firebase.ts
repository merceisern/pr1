
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZ69kXXfXsUGxjBOVwxzdPx4RDcDFSDd0",
  authDomain: "pra1-28dd8.firebaseapp.com",
  projectId: "pra1-28dd8",
  storageBucket: "pra1-28dd8.firebasestorage.app",
  messagingSenderId: "660853320242",
  appId: "1:660853320242:web:cf0a56116c81f32e6c2a2b",
  measurementId: "G-J5XPG7891E"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
