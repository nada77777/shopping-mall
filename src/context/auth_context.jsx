import { createContext, useContext, useEffect, useState } from "react";
import { currentUserChecked, googleLogin, googleLogout } from "../firebase/firebase_auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        currentUserChecked((user) => {
            setUser(user);
            console.log('user :', user.isAdmin);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, googleLogin, googleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuthContext() {
    return useContext(AuthContext);
};
