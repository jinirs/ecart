import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'

function Home() {
  
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
  return (
    <Row className='m-5' style={{marginTop: "100px"}}>
      <div className='mt-5'>
  <input placeholder='Search product' className='form-control w-25 mb-5 border border-dark' onChange={e=>setSearchTerm(e.target.value)} type="text" />
</div>
     {  
     data?.length>0?data.filter((product)=>{
      if(searchTerm == ""){
        return product
      }else if(product.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return product
      }
     }).map((product,index)=>(
      <Col key={index} className='mt-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem', height:'29rem' }}>
      <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          <p>{product?.description.slice(0,50)}...</p>
          <h5>$ {product?.price}</h5>
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i class="fa-solid fa-heart text-danger fa-2x"></i></Button>
          <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i class="fa-solid fa-cart-shopping fa-2x text-warning"></i></Button>
       </div>
      </Card.Body>
    </Card>
     </Col>
     )):<p className='text-danger fw-bolder fs-4 m-5'>Nothing to display</p>
      }
    </Row>
  )
}

export default Home