import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context';
import MyButton from './UI/button/MyButton';

const Navbar = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar_wrap">
      <MyButton onClick={logout}>
        logout
        </MyButton>
      <div className="navbar">
        <Link to="/posts" className="navbar__link">Posts</Link>
        <Link to="/about" className="navbar__link">About</Link>
      </div>
    </div>
  );
};

export default Navbar;