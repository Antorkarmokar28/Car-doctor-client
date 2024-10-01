import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="container mx-auto flex justify-center items-center"><span className="loading loading-spinner text-error"></span></div>
    }

    if(user?.email){
        return children
    }
    return <Navigate to="/signin" replace></Navigate>
};

export default PrivateRoutes;