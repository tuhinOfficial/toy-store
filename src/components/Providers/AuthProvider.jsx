import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  
  const [userName , setUserName] = useState('');
  const [photo  ,setPhoto] = useState('');

  const auth = getAuth(app);
  const loggedUser = auth.currentUser;
  console.log(loggedUser);

  useEffect(() => {
    if (loggedUser != null) {
      const Name = user.displayName;
      setUserName(Name);
      const photo = user.photoURL;
      setPhoto(photo);
  
      const uid = loggedUser.uid;
    }
  })
  
  
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () =>{
    return signOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    userName,
    photo
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
