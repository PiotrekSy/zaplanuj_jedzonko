import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDi2Ec64R2krZ5hHJc8daRZvpLRJaEshgs",
    authDomain: "zaplanuj-jedzonko-7b08f.firebaseapp.com",
    projectId: "zaplanuj-jedzonko-7b08f",
    storageBucket: "zaplanuj-jedzonko-7b08f.appspot.com",
    messagingSenderId: "169300596016",
    appId: "1:169300596016:web:0136e793f19f73c575e4f5"
};

const app = initializeApp(firebaseConfig)
// export const auth = getAuth(app)
export default getFirestore(app)