import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
{/* <div className="container"> */}
{/* <nav className="navbar  navbar-dark bg-light">
<Link to={"/"} className="nav-link">
                ECart
              </Link>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon border border-2 border-dark color-dark"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item btn btn-warning border rounded">
            <Link to={'/wishlist'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-heart text-danger"></i>Wishlist</Link>
            <Badge className='ms-2' bg="dark">{wishlist.length}</Badge>
            </li>
            <li className="nav-item btn btn-warning border rounded">
            <Link to={'/cart'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-cart-shopping text-warning"></i>Cart</Link>
            <Badge className='ms-2' bg="dark">{cart.length}</Badge>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* </div> */}
     <Navbar style={{zindex:'1'}} expand="lg" className="bg-body-tertiary position-fixed top-0 w-100 mb-5 ">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:"none", color:'black'}}>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle className='border border-dark'  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn btn-primary border rounded'>
             <Link to={'/wishlist'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-heart text-danger"></i>Wishlist</Link>
            <Badge className='ms-2' bg="dark">{wishlist.length}</Badge>
            </Nav.Link>

            <Nav.Link className='btn btn-primary border rounded ms-2'>
             <Link to={'/cart'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-cart-shopping text-warning"></i>Cart</Link>
            <Badge className='ms-2' bg="dark">{cart.length}</Badge>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  )
}

export default Header