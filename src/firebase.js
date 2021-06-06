import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBx8AYhEDxsYz7XDWDMQmnOZeReYmf_pJk",
  authDomain: "ecommerce-fire-2021.firebaseapp.com",
  projectId: "ecommerce-fire-2021",
  storageBucket: "ecommerce-fire-2021.appspot.com",
  messagingSenderId: "997718383108",
  appId: "1:997718383108:web:e86d8ce42029379dd77351"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}