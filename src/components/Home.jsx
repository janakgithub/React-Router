import React from 'react';
import { useNavigate } from 'react-router-dom';

 export function Home() {
   const navigate = useNavigate();
    return (
        <div>
            Home Page
            <button onClick={() => navigate('order-confirm')}>Place Order</button>
        </div>
    )
}


