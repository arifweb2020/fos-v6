import { Navigate } from "react-router-dom";



const PrivateRoutes = ({ Component }) => {

    const auth = "welcome"; // your logic

    return auth ? <Component /> : <Navigate to="/login" />


}

export default PrivateRoutes;