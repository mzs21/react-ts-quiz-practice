import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import { AuthProps, PropsTypeOne } from "../Interfaces";

const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

const auth = getAuth();

export function AuthProvider({ children }: PropsTypeOne) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Signup function

  const signUp = async ({ email, password, userName }: AuthProps) => {
    await createUserWithEmailAndPassword(auth, email, password);

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: userName });

      const user = auth.currentUser;
      await updateProfile(auth.currentUser, { displayName: userName });

      setCurrentUser({ ...user });
    }
  };

  // Login function
  const logIn = async ({ email, password }: AuthProps) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function

  const logOut = () => {
    return signOut(auth);
  };

  const values = {
    currentUser,
    signUp,
    logIn,
    logOut
  };

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
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
