import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderConfirmation } from './components/OrderConfirmation';

function App() {
 
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='order-confirm' element={<OrderConfirmation/>} />
        </Routes>
       </>
    )

}

export default App;