import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

export const AuthContext = createContext();



export const useAuth = () =>{
        const context = useContext(AuthContext)
        return context
}

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) =>  await signInWithEmailAndPassword (auth, email, password)
    
    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
    }, [])
        
    return(
        <AuthContext.Provider value={{
            login, 
            user,
            logout,
            loading
        }}>


            {children}
        </AuthContext.Provider>
    )
}