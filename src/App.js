import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
//import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderConfirmation } from './components/OrderConfirmation';
import { NotFound } from './components/NotFound';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { AdminUser } from './components/AdminUser';

const LazyAbout = React.lazy(()=>import('./components/About') )


function App() {
 
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<React.Suspense fallback='Loading...'>
                                                <LazyAbout />
                                            </React.Suspense>} />
            <Route path='order-confirm' element={<OrderConfirmation/>} />
            <Route path='products' element={<Products/>  }>
                <Route index element={<FeaturedProducts />} />
                <Route path='feature' element={<FeaturedProducts/>} />
                <Route path='new' element={<NewProducts/>} />
            </Route>
            <Route path='users' element={<Users/>}>
                <Route path=':userId' element={<UserDetails/>}/>
                <Route path='admin' element={<AdminUser/>}/>
            </Route>
            <Route path='*' element={<NotFound />}/>
        </Routes> 
       </>
    )

}

export default App;