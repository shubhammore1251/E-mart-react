import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { Helmet } from 'react-helmet';
const Cart = () => {


    
    const { cart } = useSelector((state) => state.carthandle)

    const [totalPrice, setTotalPrice] = useState(0)

    const [totalItems, setTotalItems] = useState(0)

    
    useEffect(() => {
       
        let items = 0;
        let price = 0;

        cart.forEach(item => {
            items +=item.qty
            price += item.qty*item.price
        });

        setTotalPrice(price);
        setTotalItems(items);

    }, [cart,totalPrice,totalItems,setTotalItems,setTotalPrice])

    return (
        <>
            {cart.length!==0?
                <section className="h-100 gradient-custom">
                    <Helmet title="EMart-Cart"/>
                    <div className="cart-cont container py-5 mt-5">
                        <div className="row d-flex justify-content-center my-4">
                            <div className="col-md-8">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h3 className="mb-0 ">Your Shopping Cart - {totalItems} {totalItems > 1 ? "item's" : "item"}</h3>
                                    </div>
                                </div>

                                {cart.length !== 0 && cart.map((cartItem)=>(
                                     <CartItem cartItem={cartItem} key={cartItem.id}/>
                                ))}
                            </div>

                            <div className="col-md-4 mx-auto mb-5 h-25 w-25 checkout-box">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>SubTotal</strong>
                                            </div>
                                            <span><strong>${totalPrice.toFixed(2)}</strong></span>
                                        </li>
                                    </ul>

                                    <Link to="/checkout">
                                        <button type="button" className="btn btn-light btn-md btn-block mx-auto checkout-btn">
                                            Proceed to checkout
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>

                        
                    </div>
                </section>
            :
             <EmptyCart/>
            }

        </>
    )
}

export default Cart
