import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
    <div>
        <input type='search' placeholder='Search Products...' />
    </div>
    <nav>
        <Link to='feature' >Feature Products</Link>
        <Link to='new' >New Products</Link>
    </nav>    
    <Outlet/>
    </>
  )
}
