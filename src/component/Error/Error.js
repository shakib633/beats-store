import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className="text-4xl">404!! 😢😢 </h1>
            <p>Page Not Found</p>
            <h3 className="text-blue-500"><Link to="/Home" >Go To Home 🙂</Link></h3>
        </div>
    );
};

export default Error;