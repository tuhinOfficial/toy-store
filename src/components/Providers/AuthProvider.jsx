import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { Watch } from "react-loader-spinner";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  // console.log(email);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  const googleProvider = new GoogleAuthProvider();

  const [userName, setUserName] = useState("");
  const [photo, setPhoto] = useState("");

  const auth = getAuth(app);

  useEffect(() => {
    const loggedUser = auth.currentUser;
    // console.log(loggedUser);
    if (loggedUser != null) {
      const Name = user.displayName;
      setUserName(Name);
      const photo = user.photoURL;
      setPhoto(photo);

      const uid = loggedUser.uid;
    }
  });

  const createUser = (email, password) => {
    setLoading(
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
    signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setEmail(currentUser.email);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    loading,
    setLoading,
    user,
    createUser,
    logIn,
    googleLogin,
    logOut,
    userName,
    photo,
    email,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
