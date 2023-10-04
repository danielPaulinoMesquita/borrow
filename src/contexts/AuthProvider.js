import {createContext, useContext, useState} from "react";
import authService from "../apis/config/authService";
import {CustomerAPI} from "../apis/CustomerAPI";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [userAuth, setUserAuth] = useState({});

    const login = async (user) => {
        const userData = await authService.login(user);
        //const customerInfo = await CustomerAPI.get(user.documentNumber);

        // todo this mock 'userActive' it's only to test
        const userActive = {...user, roles: ['CUSTOMER']}
        setUserAuth(userActive);
    }

    const logout = () => {
        setUserAuth(null);
    }

    return (
        <AuthContext.Provider value={{userAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()  => {
    return useContext(AuthContext);
}