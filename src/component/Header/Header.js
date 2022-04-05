import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       <div> 
           <h1 className="text-5xl font-bold p-5 bg-slate-400"> Laptop House 💻</h1>
            <div className=" link font-bold text-xl mt-8 mb-8">
            <Link to='/'>Home</Link>
            <Link to='/Reviews'>Reviews</Link>
            <Link to='/Blogs'>Blogs</Link>
            <Link to='/Dashboard'>Dashboard</Link>
            <Link to='/About'>About</Link>
        </div>
       </div>
    );
};

export default Header;