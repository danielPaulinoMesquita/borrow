import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [userAuth, setUserAuth] = useState();

    const login = (user) => {
        setUserAuth(user);
    }

    const logout = () => {
        setUserAuth(null);
    }

    return (
        <AuthContext.Provider value={{userAuth,login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()  => {
    return useContext(AuthContext);
}