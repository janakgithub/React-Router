import React from 'react';
import { NavLink } from 'react-router-dom';

 export const Navbar = () => {

   const navLinkStyles = ({isActive}) =>{
        return{
            'text-decoration': isActive ? 'none':'',
            'font-weight': isActive ? 'bold': ''
        }
    }

    return (
        <nav>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
        </nav>
    )
}


