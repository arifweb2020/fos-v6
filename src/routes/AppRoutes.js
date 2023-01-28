import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
//import Navbar from '../components/navbar/Navbar';
import Loader from './../components/loader/Loader';
import PrivateRoutes from './PrivateRoutes';
import LoginConatiner from './../components/login-container/LoginConatiner';
import MainContainer from './../components/main-conatiner/MainContainer';

const Home = React.lazy(() => import('./../pages/home/Home'));
const About = React.lazy(() => import('./../pages/about/About'));
const Products = React.lazy(() => import('./../pages/products/Products'));
const Login = React.lazy(() => import('./../pages/login/Login'));
const ErrorPage = React.lazy(() => import('./../pages/errorpage/ErrorPage'));


function AppRoutes(props) {
    // const location = useLocation();
    return (
        <>
            {/* {
                location.pathname === "/login" ? null :
                    <Navbar />

                    {(props) => <MainContainer {...props}><Home {...props} /></MainContainer>}
            } */}
            <React.Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/login" element={<LoginConatiner><Login /></LoginConatiner>} />
                    <Route path="/" element={<MainContainer><PrivateRoutes Component={Home} /></MainContainer>} />
                    <Route path="/about/:id" element={<MainContainer><PrivateRoutes Component={About} /></MainContainer>} />
                    <Route path="/search/:searchKey" element={<MainContainer><PrivateRoutes Component={Products} /></MainContainer>} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </React.Suspense>
        </>
    );
}

export default AppRoutes;