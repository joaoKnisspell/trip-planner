//React
import { useContext } from "react";

//Context
import { UserContext } from '../context/UserContext'

//Router
import { Navigate } from "react-router-dom";

function Private({ children }){

    const { signed, loading } = useContext(UserContext);

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed){
        return(
            <Navigate to="/" />
        )
    }

    return children;
}

export default Private;