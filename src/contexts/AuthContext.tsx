import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import { AuthProps, PropsTypeOne } from "../Interfaces";

const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: PropsTypeOne) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  // Signup function

  const signUp = async ({ email, password, userName }: AuthProps) => {
    const auth = getAuth();

    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, { displayName: userName });

    const user = auth.currentUser;

    setCurrentUser({ ...user });
  };

  // Login function
  const logIn = async ({ email, password }: AuthProps) => {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function

  const logOut = () => {
    const auth = getAuth();

    return signOut(auth);
  };

  const values = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
}