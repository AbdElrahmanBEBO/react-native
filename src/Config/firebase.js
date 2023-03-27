import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDbvhQuc963mYzlXUcT1VLuA4jJY3G6Vp4",
    authDomain: "react-native-lab-a1e7e.firebaseapp.com",
    projectId: "react-native-lab-a1e7e",
    storageBucket: "react-native-lab-a1e7e.appspot.com",
    messagingSenderId: "301922622246",
    appId: "1:301922622246:web:d359409d8c92cf75c07fe7",
    measurementId: "G-2RMLYRWPL8"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp);

export default auth