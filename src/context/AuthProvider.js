import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.init';


const AuthContext = createContext(app);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //email login

    //sign up

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //sigh out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //get current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, []);


    //display user
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    //reset password

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const getInfo = { user, setLoading, loading, createUser, logOut, login, updateUserProfile, resetPassword }

    return (
        <AuthContext.Provider value={getInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export const AuthState = () => {
    return useContext(AuthContext);
}
export default AuthProvider
