import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)
    if(loading){
        return <div className="container mx-auto flex justify-center items-center"><span className="loading loading-spinner text-error"></span></div>
    }

    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/signin" replace></Navigate>
};

export default PrivateRoutes;