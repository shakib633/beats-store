import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className=" link font-bold text-xl">
            <Link to='/'>Home</Link>
            <Link to='/Reviews'>Reviews</Link>
            <Link to='/Blogs'>Blogs</Link>
            <Link to='/Dashboard'>Dashboard</Link>
            <Link to='/About'>About</Link>
        </div>
    );
};

export default Header;