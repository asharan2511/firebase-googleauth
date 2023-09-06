import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUlTE267_i14SuIINmjLaPJeBn4pWy1Ag",
  authDomain: "fir-auth-64f1a.firebaseapp.com",
  projectId: "fir-auth-64f1a",
  storageBucket: "fir-auth-64f1a.appspot.com",
  messagingSenderId: "1086583614902",
  appId: "1:1086583614902:web:636214f7153698de7be517",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => console.log(error));
};
