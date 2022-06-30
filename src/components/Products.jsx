/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from 'react-router-dom';
import ProductsLoading from './ProductsLoading';

const Products = (props) => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;


    useEffect(() => {

        const getProducts = async () => {

            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])


    const filterProduct = (cat)=>{
          
        const updatedList = data.filter((item)=> item.category === cat);
        setFilter(updatedList);
    }



    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 filter-buttons">
                    <Helmet title="EMart-Products"/>
                    <div className="btn btn-outline-dark me-2" onClick={ ()=> setFilter(data) }>All</div>

                    <div className="btn btn-outline-dark me-2" onClick={ ()=> filterProduct("men's clothing") }>Men's Clothing</div>

                    <div className="btn btn-outline-dark me-2" onClick={ ()=> filterProduct("women's clothing") }>Women's Clothing</div>

                    <div className="btn btn-outline-dark me-2" onClick={ ()=> filterProduct("jewelery") }>Jewelery</div>

                    <div className="btn btn-outline-dark me-2" onClick={ ()=> filterProduct("electronics") }>Electronics</div>

                </div>
                {filter.map((product) => {

                    return (
                        <>
                            <div className="col-md-3 product-cards" key={product.id}>
                                <div className="card h-100 text-center p-4">
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">$ {product.price}</p>
                                            <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                        </div>
                                </div>

                            </div>

                        </>
                    )

                })}
            </>
        )
    }



    return (
        <div>
            <div className="container my-2 py-5">
                <div className="row mt-5">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>{props.heading}</h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {loading ?<ProductsLoading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    )
}

export default Products
