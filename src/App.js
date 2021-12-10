import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsloading] = useState(true)
 

  useEffect(()=>{
    if(localStorage.getItem('auth') ){
      setIsAuth(true)
    }
    setIsloading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>

    </AuthContext.Provider>
  );
}

export default App;
