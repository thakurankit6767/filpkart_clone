import { Button } from '@material-ui/core';
import { ConstructionOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementitem, deleteCart, incrementitem, removeallcart } from '../../redux/data/action';

import "./cart.css"
const Cart = () => {
 const [tprice,setTprice]=useState(0)
  const dispatch=useDispatch()
  const data = useSelector((state) => state.data.data);

  const cartproducts=useSelector((state)=>state.data.cart);
  
  
  


 
const RemoveItem = (idx) => {
  dispatch(decrementitem(idx));
};
const Additem = (idx) => {
  dispatch(incrementitem(idx));
};


const handlecartRemove=(idx)=>{
  const filterdata=cartproducts.filter((e)=>{
    return e.id!=idx
  })
  console.log(filterdata)
  dispatch(deleteCart(idx))

  

}
  const handlecartDelete=()=>{
    dispatch(removeallcart())

  }

let x=cartproducts
  return (
    <>
    <Button onClick={()=>handlecartDelete}>delete cart</Button>
   
    <div className='maincart'>
    
    
    
     
     { x.map((e)=>{
      return(
        <div key={e.id} className='cartdiv'>
        <h1 className='title'>{e.brand}</h1>
        
        <img style={{width:"100%"}} src={e.images.image1} alt="producti"/>
        <h2> Rs {e.price*e.quantity}</h2>
        <br/>
        <Button onClick={()=>{alert("payment")}}>Buy Product</Button>
        <Button className='btns' onClick={()=>handlecartRemove(e.id)}>remove item</Button>
        <button onClick={() => Additem(e.id)}>+</button>
        <h2>quantity:{e.quantity}</h2>
                {e.quantity > 1 ? (
                  <button onClick={() => RemoveItem(e.id)}>-</button>
                ) : null}

        </div>
      )
    })}
    </div>
    <button onClick={handlecartDelete}>delete all cart</button>
    <button>
        <Link to="/checkout">Proceed to checkout</Link>
      </button>
    </>
  )
}

export default Cart