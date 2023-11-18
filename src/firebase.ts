import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm25G5TkdmpCRda4UOLZYFa84m4yh89vs",
  authDomain: "eth-dapp-176a7.firebaseapp.com",
  projectId: "eth-dapp-176a7",
  storageBucket: "eth-dapp-176a7.appspot.com",
  messagingSenderId: "56869414105",
  appId: "1:56869414105:web:90a0d5cd8ef2a3e14d8ac8",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

const signup = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      getAuth(app),
      email,
      password
    );
    const user = userCredential.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, logout, signup, login };
