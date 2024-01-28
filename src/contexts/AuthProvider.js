import {createContext, useContext, useState} from "react";
import authService from "../apis/config/authService";
import {CustomerAPI} from "../apis/CustomerAPI";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [userAuth, setUserAuth] = useState({});

    const login = async (login) => {
        // todo remember to take out a token from local storage to not conflict with the token that already exists
        console.log('--- chegou aqui --')
        const userData = await authService.login(login);

        console.log('login PEGO:', login)
        const customerInfo = await CustomerAPI.get(login.user);

        // todo this mock 'userActive' it's only to test
        const userActive = {...login, roles: ['CUSTOMER']}
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