import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCieR3yHDDF4JqYdpMJPqnq8yvLiDHz4Jg",
    authDomain: "registration-2936f.firebaseapp.com",
    projectId: "registration-2936f",
    storageBucket: "registration-2936f.appspot.com",
    messagingSenderId: "577187515478",
    appId: "1:577187515478:web:722d4ba16da8b738a03ff7"
  };

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref();