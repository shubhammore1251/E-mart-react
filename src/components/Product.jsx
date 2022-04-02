/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/Cart.action';
import { Helmet } from 'react-helmet';

const Product = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();


    const dispatch = useDispatch();

    const addProduct = (product) =>{
        dispatch(addToCart(product))
    }

    useEffect(() => {
       
       const getProducts = async()=>{

        setLoading(true);

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
       }

        getProducts();
    }, [])

    
    const Loading = () => {
        return (
            <>
               <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>

                <div className="col-md-6" style={{LineHeight: 2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} /> 
                    <Skeleton height={25}  width={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={150} />

                    <div className="d-flex">
                      <Skeleton height={50}  width={150}/>
                      <Skeleton height={50}  width={120} style={{marginLeft:6}}/>
                    </div>
                   
                </div>

                
            </>
        )
    }
 
    const ShowProduct = ()=>{

        return (
            <>  
                <Helmet title={product.title}/>
                <div className="col-md-6 single-product">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>

                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>

                    <h1 className="display-5">{product.title}</h1>

                    <p className="lead">
                        Rating {product.rating && product.rating.rate}
                        <i className="fas fa-star"></i>
                    </p>

                    <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>

                    <p className="lead">{product.description}</p>

                    <button className="btn btn-outline-dark px-4 py-2" onClick={ ()=> addProduct(product) }>Add to Cart</button>

                    <Link className="btn btn-dark ms-2 px-3 py-2" to="/cart">Go to Cart</Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row p-4 mt-5">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    )
}

export default Product
