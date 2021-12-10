import React, { useContext } from 'react'; 
import { Routes, Route,Navigate } from "react-router-dom";
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';


const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader />
    }
 

    return (
        isAuth
            ? 
            <Routes>            
                {privateRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element} />
                )} 
             </Routes> 
            :
            <Routes>            
            {publicRoutes.map(route => 
                    <Route key={route.path} path={route.path} element={route.element} />
                )} 
            </Routes>
        

        
    );
};

export default AppRouter;