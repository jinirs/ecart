import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/slices/cartSlice'

function Cart() {
  const navigate = useNavigate()
  const CartArray =useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const getCartTotal = ()=>{
    if(CartArray.length>0){
      setTotal(CartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order successfully placed... Thank you for purchasing with us..!")
    navigate('/')
    
  }
  useEffect(()=>{
    getCartTotal()
  },[CartArray])
  return (
    <div className='container' style={{marginTop:'100px'}}>
      {
        CartArray.length>0?
        <div className="row mt-5">
          <div className="col-lg-8">
          <table className='table shadow border'>
<thead>
  <tr>
    <th>#</th>
    <th>Title</th>
    <th>Image</th>
    <th>Price</th>
  </tr>
</thead>
<tbody>
{
  CartArray.map((product,index)=>(
    <tr key={index}>
      <td>{index+1}</td>
      <td>{product.title}</td>
      <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
      <td>${product.price}</td>
      <td><button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'> <i className="fa-solid fa-trash text-danger fa-2x"></i></button></td>
    </tr>
  ))
}
</tbody>
          </table>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className='border p-3 rounded shadow'>
                <h3 className='text-warning text-center'>Cart Summary</h3>
                <h4 className='mt-3'>Total Products : <span>{CartArray.length}</span></h4>
                <h4>Total : <span className='text-danger fw-bolder fs-2'>$ {total} </span> </h4>
            <div className="d-grid">
              <button onClick={handleCart} className='btn btn-success mt-5 rounded'>Check Out</button>
            </div>
            </div>
          </div>
        </div>:
         <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
         <img height={'250px'} src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9521b4b7adc2ede5194a30481a1994f52968b0d1f9d&rid=giphy.gif&ct=s" alt="" />
         <h4 className='fw-bolder text-dark'>Your Cart Is Empty!!!</h4>
         <Link style={{textDecoration:'none'}} className='btn btn-warning rounded mt-3' to={'/'}>Back To Home</Link>
       </div>
      }

    </div>
  )
}

export default Cart
