import React, { useEffect, useState } from "react";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./app.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Login from "./components/login/login";
import CardMaking from "./components/cardMaking/card_making";

function App() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  let provider = {};

  const signInWithGoogle = () => {
    provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
  };

  const signInWithGithub = () => {
    provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
  };

  const signIn = (provider) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(firebase.auth().currentUser.providerData[0].displayName);

        // if (afteruser != null) {
        //   afteruser.providerData.forEach(function (profile) {
        //     console.log("Sign-in provider: " + profile.providerId);
        //     console.log("  Provider-specific UID: " + profile.uid);
        //     console.log("  Name: " + profile.displayName);
        //     console.log("  Email: " + profile.email);
        //     console.log("  Photo URL: " + profile.photoURL);
        //   });
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(auth.currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header user={user} signOut={logout}></Header>
      <Router>
        {!user ? (
          <Login
            signInWithGoogle={signInWithGoogle}
            signInWithGithub={signInWithGithub}
          />
        ) : (
          <CardMaking />
        )}
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
