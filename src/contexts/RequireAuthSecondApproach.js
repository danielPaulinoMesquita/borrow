import {useAuth} from "./AuthProvider";
import {Navigate, Outlet, useLocation} from "react-router-dom";

/**
 * This RequireAuth is using the component Outlet and that's why we can consider another approach of RequireAuth
 * @param allowedRoles
 * @returns {JSX.Element}
 * @constructor
 */
export const RequireAuthSecondApproach = ({allowedRoles}) => {
    const auth = useAuth();
    const location = useLocation();

    return (
        auth?.userAuth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth?.user
                ? <Navigate to='/unauthorized' state={{from: location}} replace />
                : <Navigate to='/login' state={{ from:location }} replace/>
    )
}

export default RequireAuthSecondApproach;