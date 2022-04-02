import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {


    let location = useLocation();

    const { cart } = useSelector((state) => state.carthandle)

    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {
        let count = 0;

        cart.forEach((item) => {
            count += item.qty;
        });
        setItemCount(count);

    }, [cart, setItemCount])


    return (
        <>
            <nav className="navbar navbar-expand-lg py-1 shadow-sm fixed-top">
                <div className="container">

                    <Link className="navbar-brand fw-bold py-0" to="/" style={{ fontFamily: "Lobster, cursive", fontSize: "35px" }}>E-MART</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars" style={{color:"#fff", fontSize:"28px"}}></i>
                        </span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul style={{ fontSize: "18px" }} className="navbar-nav mx-auto mb-2 mb-lg-0 py-0">

                            <li className="nav-item py-0">
                                <Link className={`nav-link ${location.pathname === "/" ? "nav-active" : "nav-inactive"}`} aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item py-0">
                                <Link className={`nav-link ${location.pathname === "/products" ? "nav-active" : "nav-inactive"}`} to="/products">Products</Link>
                            </li>

                            <li className="nav-item py-0">
                                <Link className={`nav-link ${location.pathname === "/about" ? "nav-active" : "nav-inactive"}`} to="/about">About</Link>
                            </li>

                            <li className="nav-item py-0">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "nav-active" : "nav-inactive"}`} to="/contact">Contact</Link>
                            </li>
                        </ul>

                        <div className="buttons">
                            <Link to="/account" className="btn btn-outline-light me-5 "><i className="fa fa-user"></i></Link>

                            <Link to="/cart" className="btn btn-outline-light ms-2 cart py-0">

                                <i className="fas fa-shopping-cart"></i>
                                <span className="position-absolute translate-middle p-1 rounded-circle">
                                    {itemCount}
                                </span>


                            </Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
