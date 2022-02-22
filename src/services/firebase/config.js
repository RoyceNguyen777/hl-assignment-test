import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUk4XVn-If6dm6FuH4eZZPC4Ib6hnsmso",
  authDomain: "a-joke-efaa4.firebaseapp.com",
  projectId: "a-joke-efaa4",
  storageBucket: "a-joke-efaa4.appspot.com",
  messagingSenderId: "820005862757",
  appId: "1:820005862757:web:f6e8e1991bf3e3be01758c",
  measurementId: "G-SCGYCN6656",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();





// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const photoURL = result.user.photoURL;
//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("photoURL", photoURL);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
