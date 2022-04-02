import React, { useEffect, useState } from 'react'
import ProductsLoading from './ProductsLoading';
import {Link} from 'react-router-dom';


const FeaturedProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products?limit=4");
            setProducts(await response.json());
            setLoading(false);
        }
        getProducts();
    }, [])


    
    return (

        <div className='featured-product'>
            <div className="container my-5 py-5">
                <div className="row mt-1">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Featured Products</h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">
                    {!loading ? products.map((product) => {

                        return (
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
                        )
                    })
                    :
                    <ProductsLoading/>
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
