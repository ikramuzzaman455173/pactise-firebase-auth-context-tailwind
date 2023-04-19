import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext(null)
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const signInWithGoogle = () => {
    return signInWithPopup(auth,googleProvider)
  }

  const authInfo={user,signInWithGoogle}
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;