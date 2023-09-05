import React from 'react';
import { NavLink } from 'react-router-dom';

 export const Navbar = () => {

   const navLinkStyles = ({isActive}) =>{
        return{
            textDecoration: isActive ? 'none':'',
            fontWeight: isActive ? 'bold': ''
        }
    }

    return (
        <nav className='main-nav'>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
        </nav>
    )
}


