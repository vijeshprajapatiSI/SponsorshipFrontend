import React from 'react'
import { Link } from 'react-router-dom';

    
    const Navbar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
        <Link className="navbar-brand" to="/">SponsorShip Management</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/sponsors">Sponsors</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to='/addpayment'>Add Payment</Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/matchEachYear'>Match each Year</Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/GetmatchesWithPayments'>Matches With Payments</Link>
              
            </li>
          </ul>
        </div>
      </div>
        </nav>
      );
    };
    
    export default Navbar;
    
    
    
  
