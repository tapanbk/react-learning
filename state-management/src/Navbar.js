import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
       <nav className='navbar'>
           <h1>The Dojo Blog</h1>
           <div className="links">
               <Link to="/">Homepage</Link>
               <Link to="/create">New Blog</Link>
           </div>
       </nav>
    );
};

export default NavBar;
