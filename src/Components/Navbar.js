import React, { useState } from 'react'
import Badge from "react-bootstrap/Badge";
import { Link,useNavigate } from "react-router-dom"
import Modal from '../Model';
import Cart from "../Screens/Cart";
import { UseCart } from './ContexReducer';


const Navbar = () => {
  const [cartView, setCartView] = useState(false)
  const navigate=useNavigate();
  let data = UseCart();
  const handleLogout =()=>{

    localStorage.removeItem("authToken");
    navigate("/Login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs1=italic" to="/">FOODIES GANG</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5 " aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My orders</Link>
                </li>

                : ""}

            </ul>
            <div className='d-flex'>
              {(!localStorage.getItem("authToken")) ?
                <div className='d-flex'>
                  <Link className="btn bg-white text success mx-l " to="/login">Login</Link>
                  <Link className="btn bg-white text success mx-l " to="/createuser">Signup</Link>
                </div>
                :
                <div>
                  <div className='btn bg-white text-success mx-2 ' onClick={()=>{setCartView(true)}}>My Cart{" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                  </div>
                  {cartView ? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}

                  <div className='btn bg-black text-danger mx-l ' onClick={handleLogout}>Logout</div>
                </div>

              }

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar