// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    signInWithPopup,
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import {
    getFirestore,
    collection,
    getDocs,
    collectionGroup,
    query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqaGEBSi4fzNip2mEiMhDWkKaRD51xDTc",
    authDomain: "fooddeliverydb-d0881.firebaseapp.com",
    databaseURL: "https://fooddeliverydb-d0881-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fooddeliverydb-d0881",
    storageBucket: "fooddeliverydb-d0881.appspot.com",
    messagingSenderId: "479434941444",
    appId: "1:479434941444:web:d54401fc4243af44674151",
    measurementId: "G-ESJZGC3BD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//log into account from the log in form 
const loginEmailPassword = async () => {
    const loginEmail = loginForm.email.value;
    const loginPassword = loginForm.pass.value;
    const userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredentials.user);
}
loginForm.submit.onclick = (e) => {
    e.preventDefault();
    loginEmailPassword();

}

//authenticate with google
const provider=new GoogleAuthProvider;
let signInGoogleBtn = document.querySelector(".signin-Google");

if (signInGoogleBtn) {
    signInGoogleBtn.onclick = () => {
        signInWithPopup(auth,provider).then(() => {

        })
    }
}
// create account

const createAccount = async () => {
    const loginEmail = signinForm.email.value;
    const loginPassword = signinForm.pass.value;

    //show this when password is smaller than 6 characters
    let errorPasswordCharacters = document.querySelector(".error-password-need-to-be-bigger");

    if (loginPassword.length < 6) {
        errorPasswordCharacters.style.display = "inherit";
    } else {
        const loginPassword2 = signinForm.reppass.value;
        if (loginPassword === loginPassword2) {
            const userCredentials = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
            sendEmailVerification(auth.currentUser).then(
                () => {
                    console.log("email was sent go check it");
                }
            );
            console.log(userCredentials.user);
        } else {
            errorPasswordCharacters.style.display = "none";
            let showerror = document.querySelector(".error-password");
            showerror.innerHTML = "passwords does not match";
            console.log("parolele nu se potrivesc");
        }
    }
}
signinForm.submit.onclick = (e) => {
    e.preventDefault();
    createAccount();
    signinForm.reset();
}

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user);
            signinForm.style.display = "none";
            loginForm.style.display = 'none';
            buttons.style.display = "none";
            btnLogout.style.display = "block";
            text.innerHTML = "Logged in as " + user.email + "";
            text.parentNode.innerHTML += "<h1> Email is verified " + user.emailVerified + "</h1>";
            //    document.querySelector(".index-container-header-content").style.display = "none";
        } else {
            buttons.style.display = "inherit";
            btnLogout.style.display = "none";
        }
    });
}
//check if a user is authenticated
monitorAuthState();


//log out
const logout = async () => {
    await signOut(auth);
}

btnLogout.onclick = () => {
    logout();
    window.location.reload();
}



//get doc from database
const querySnapshot = await getDocs(collection(db, "restaurant"));
const restaurant2 = query(collectionGroup(db, "restaurant"));
const querySnapshot2 = await getDocs(restaurant2);
if (restaurantList && restaurant) {
    querySnapshot.forEach((doc) => {
        console.log(doc);
        console.log(restaurant.children[1].children[0]);
        restaurant.children[1].children[0].innerHTML = doc.data().RestaurantName;
        console.log(doc.data().RestaurantName);
        restaurantList.innerHTML += restaurant.outerHTML;
    });
    querySnapshot2.forEach((doc) => {
        console.log(doc);
        // console.log(restaurant.children[1].children[0]);
        // restaurant.children[1].children[0].innerHTML = doc.data().RestaurantName;
        // console.log(doc.data().RestaurantName);
        // restaurantList.innerHTML += restaurant.outerHTML;
    });
    let restaurantListAll = document.querySelectorAll(".restaurant-result");
    restaurantListAll.forEach((e, i) => {
        e.onclick = () => {
            let restaurantName = e.querySelector(".actual-restaurant").children[0].innerHTML;//get the innerHTML text from the element from restaurants.html
            localStorage.setItem("restaurantName", restaurantName);
            window.location.href = "detalied-info-restaurant.html";
        }
    });
}

// querySnapshot.forEach((doc) => {
//     console.log(doc);
//     console.log(restaurant.children[1].children[0]);
//     restaurant.children[1].children[0].innerHTML = doc.data().RestaurantName;
//     console.log(doc.data().RestaurantName);
//     restaurantList.innerHTML += restaurant.outerHTML;
// });