import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    // register 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logoutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    //
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    console.log(user)
    const authInfo = {
        user,
        loading, 
        setUser,
        createUser, 
        loginUser,
        logoutUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;