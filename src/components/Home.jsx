import React from 'react'
import { Helmet } from 'react-helmet'
import FeaturedProducts from './FeaturedProducts'

const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                <Helmet title="EMart-Home" />

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/carouselbg1.jpg" className="d-block w-100" alt="carouselimg" />

                        <div className="carousel-content">
                            <p className="card-text">Exciting offers</p>
                            <button type="button" className="btn btn-lg">CHECK NOW</button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/carouselbg2.jpg" className="d-block w-100" alt="carouselimg" />

                        <div className="carousel-content">
                            <p className="card-text">New Arrivals</p>
                            <button type="button" className="btn btn-lg">SHOP NOW</button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="images/carouselbg3.jpg" className="d-block w-100" alt="carouselimg" />

                        <div className="carousel-content">
                            <p className="card-text">GREAT DISCOUNTS</p>
                            <button type="button" className="btn  btn-lg">Grab NOW</button>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="features">

                <div className="feature-block">

                    <div className="image-div">
                        <img src="images/track.png" alt="track" />
                    </div>

                    <div className='data-text'>
                        <h3>Free Shipping</h3>
                        <p>Free Delivery over $50</p>
                    </div>

                </div>


                <div className="feature-block">

                    <div className="image-div">
                        <img src="images/return.png" alt="return" />
                    </div>
                    

                    <div className='data-text'>
                        <h3>Free Returns</h3>
                        <p>Haslee Free Returns</p>
                    </div>

                </div>

                <div className="feature-block">

                    <div className="image-div">
                        <img src="images/secure.png" alt="secure" />
                    </div>
                   

                    <div className="data-text">
                        <h3>Secure Shopping</h3>
                        <p>Best Security Features</p>
                    </div>

                </div>

                <div className="feature-block">

                    <div className="image-div">
                       <img src="images/discount.png" alt="discount" />
                    </div>
                    

                    <div className="data-text">
                        <h3>Great Discounts</h3>
                        <p>Get great deals every month</p>
                    </div>

                </div>
            </div>

            <FeaturedProducts/>
            {/* <Products heading={props.heading}/> */}
        </>
    )
}

export default Home
