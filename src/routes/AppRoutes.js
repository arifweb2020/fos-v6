import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Loader from './../components/loader/Loader';
import PrivateRoutes from './PrivateRoutes';
const Home = React.lazy(() => import('./../pages/home/Home'));
const About = React.lazy(() => import('./../pages/about/About'));
const Login = React.lazy(() => import('./../pages/login/Login'));
const ErrorPage = React.lazy(() => import('./../pages/errorpage/ErrorPage'));


function AppRoutes(props) {
    const location = useLocation();
    return (
        <>
            {
                location.pathname === "/login" ? null :
                    <Navbar />
            }
            <React.Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<PrivateRoutes Component={Home} />} />
                    <Route path="/about" element={<PrivateRoutes Component={About} />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </React.Suspense>
        </>
    );
}

export default AppRoutes;