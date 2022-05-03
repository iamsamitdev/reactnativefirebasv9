import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDMgZAK7aUCtkCSHPOK1-PnI6erXKci-ac',
  authDomain: 'reactfirebasev-9.firebaseapp.com',
  projectId: 'reactfirebasev-9',
  storageBucket: 'reactfirebasev-9.appspot.com',
  messagingSenderId: '560285006346',
  appId: '1:560285006346:web:b4f1020633aa8f95fd7df3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
