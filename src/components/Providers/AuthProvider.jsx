import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  
    const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password);
  };

  const logIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
  }

  const authInfo = {
    createUser,
    logIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
