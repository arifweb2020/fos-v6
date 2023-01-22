import { Navigate } from "react-router-dom";



const PrivateRoutes = ({ Component }) => {

    const auth = "welome"; // your logic

    return auth ? <Component /> : <Navigate to="/login" />


}

export default PrivateRoutes;