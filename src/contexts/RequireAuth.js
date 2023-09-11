import {useAuth} from "./AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

/**
 * This RequireAuth component can embrace other components and check it needs auth
 * @param children
 * @returns {*|JSX.Element}
 * @constructor
 */
export const RequireAuth = ({children}) => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.userAuth) {
        return <Navigate to='/login' state={{path: location.pathname}} />
    }

    return children
}