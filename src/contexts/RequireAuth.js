import {useAuth} from "./AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

/**
 * This RequireAuth component can embrace other components and check it needs auth
 * @param children
 * @param allowedRoles
 * @returns {*|JSX.Element}
 * @constructor
 */
export const RequireAuth = ({children, allowedRoles}) => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.userAuth?.user) {
        return <Navigate to='/login' state={{path: location.pathname}} replace/>
    }

    const hasRole = auth?.userAuth?.roles?.find(role => allowedRoles?.includes(role)) !== undefined;

    if (auth?.userAuth.user && !hasRole) {
        return <Navigate to={'/unauthorized'} state={{path: location.pathname}}/>
    }

    return children
}