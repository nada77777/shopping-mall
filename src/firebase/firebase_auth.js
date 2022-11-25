
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyB0xWp7PzfaThGEnZCt65jPziAkE2iL35o",
    authDomain: "shopping-mall-641d0.firebaseapp.com",
    projectId: "shopping-mall-641d0",
    storageBucket: "shopping-mall-641d0.appspot.com",
    messagingSenderId: "1027734846384",
    appId: "1:1027734846384:web:86795b708ac13f55207475",
    measurementId: "G-MK4TT9SGLX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(firebaseApp);

export function googleLogin() {
    signInWithPopup(auth, provider);
};

export function googleLogout() {
    signOut(auth).then(result => result);
};

export function currentUserChecked(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updatedUser = user ? await checkAdminUser(user) : null;
        callback(updatedUser);
    });
};


async function checkAdminUser(user) {
    return get(child(ref(database), 'admins')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            console.log(user);
            const admins = snapshot.val();
            const isAdmin = admins.includes(user.uid);
            console.log(isAdmin);
            return { ...user, isAdmin: isAdmin };
        }
        return user;
    });
};





