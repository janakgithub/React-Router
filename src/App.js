import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderConfirmation } from './components/OrderConfirmation';
import { NotFound } from './components/NotFound';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';

function App() {
 
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='order-confirm' element={<OrderConfirmation/>} />
            <Route path='products' element={<Products/>  }>
                <Route path='feature' element={<FeaturedProducts/>} />
                <Route path='new' element={<NewProducts/>} />
            </Route>
            <Route path='*' element={<NotFound />}/>
        </Routes> 
       </>
    )

}

export default App;