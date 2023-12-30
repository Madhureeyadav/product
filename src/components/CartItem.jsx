import React from 'react'
import { MdDelete } from "react-icons/md";
import {toast} from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import {remove} from '../redux/Slices/CartSlice'


const CartItem = ({item}) => {
const dispatch=useDispatch();

  const removeFromCart =()=>{
dispatch(remove(item.id));
toast.success("remove the cart");

  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="logo"/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
            <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
