import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDaNo63iCa6gcEl0-Yl5nGOqAAZEirXgRc",
    authDomain: "restaurantapp-a8eac.firebaseapp.com",
    databaseURL: "https://restaurantapp-a8eac-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-a8eac",
    storageBucket: "restaurantapp-a8eac.appspot.com",
    messagingSenderId: "109985261469",
    appId: "1:109985261469:web:401899700a804230ba3174"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};
