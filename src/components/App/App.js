import { BrowserRouter, Routes, Route } from 'react-router-dom';
import firebase from 'firebase/app';

import Landing from '../../views/Landing/Landing';
import logo from '../../assets/logo.svg';

<<<<<<< HEAD
firebase.initializeApp({
    apiKey: "AIzaSyBAsoMYxzM46yavU-4Em-1ihbBNWzznvDg",
    authDomain: "blueocean-612b2.firebaseapp.com",
    projectId: "blueocean-612b2",
    storageBucket: "blueocean-612b2.appspot.com",
    messagingSenderId: "43711589559",
    appId: "1:43711589559:web:effcb703d3262364feb132",
    measurementId: "G-TW42PT564X"
})

const App = () => {
=======
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyBAsoMYxzM46yavU-4Em-1ihbBNWzznvDg",
  authDomain: "blueocean-612b2.firebaseapp.com",
  projectId: "blueocean-612b2",
  storageBucket: "blueocean-612b2.appspot.com",
  messagingSenderId: "43711589559",
  appId: "1:43711589559:web:effcb703d3262364feb132",
  measurementId: "G-TW42PT564X"
})

function App() {
>>>>>>> d1d12e9d191e35c412f7e43c84e772cfb5bcb5fa
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
  )
};

export default App;
