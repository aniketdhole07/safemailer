
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCnIJiNuVqYHmNCBMX1dUMx6YCulKNMzMY",
  authDomain: "safe-mailer.firebaseapp.com",
  projectId: "safe-mailer",
  storageBucket: "safe-mailer.appspot.com",
  messagingSenderId: "733045864817",
  appId: "1:733045864817:web:19dc0fb1866819ad8e1ed0",
  measurementId: "G-JKXJCT1MFK"
};

    firebase.initializeApp(config);
    firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase