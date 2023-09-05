import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderConfirmation = () => {
    const navigate = useNavigate();
  return (
    <div>Order Confirmed!!
        <button onClick={()=>{navigate(-1)}}>Go Back</button>
    </div>
  )
}
