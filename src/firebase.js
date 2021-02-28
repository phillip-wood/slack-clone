import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCDk34P49eO_ZUCP0Hk_kXKdTXBCFx-PFA",
  authDomain: "slack-clone-challenge-38c2f.firebaseapp.com",
  projectId: "slack-clone-challenge-38c2f",
  storageBucket: "slack-clone-challenge-38c2f.appspot.com",
  messagingSenderId: "154259730831",
  appId: "1:154259730831:web:439e02492b30cb5a765bfa"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db