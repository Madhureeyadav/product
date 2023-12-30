import React from 'react'
import {useDispatch,useSelector} from'react-redux';
import {add,remove} from '../redux/Slices/CartSlice'
import {toast} from 'react-hot-toast'


const Product = ({post}) => {

  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();

  const addToCart = ()=>{
dispatch(add(post));
toast.success("Item added to Cart");
  }

const removeFromCart =() =>{
  dispatch(remove(post.id));
  toast.error("remove to cart");
}

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div>
      <img src={post.image} alt="logo"/>
      </div>
      <div>
      <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(post.price)}</p>
      </div>
      <div>
        { cart &&  cart.some((p) => p.id == post.id) ? 
        
         ( <button onClick={removeFromCart}>Remove from Cart</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )
            
            //false ? <p>Remove Item</p> :<p>Add to cart</p>
        }
      </div>
    </div>
  );
};

export default Product
