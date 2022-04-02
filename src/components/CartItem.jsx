import React, {useState } from 'react'
import { useDispatch } from 'react-redux';

import { adjustQty, RemoveItem } from '../redux/action/Cart.action';

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch();

    const handleClose = (id) => {
        dispatch(RemoveItem(id))
    }

    const [input, setInput] = useState(cartItem.qty)

    const changeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustQty(cartItem.id,e.target.value))
    }


    return (

        <div className="card-body">
            {/*Single item*/}
            <div className="row">

                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0 card-data">
                    {/* <!-- Image --> */}
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={cartItem.image}
                           alt={cartItem.title} width="150px" height="120px"/>
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                        </a>
                    </div>
                    {/* <!-- Image --> */}
                </div>

                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 data-part">
                    {/* <!-- Data --> */}
                    <p><strong>{cartItem.title}</strong></p>
                    <p>Category: {cartItem.category}</p>
                    <button type="button" className="btn btn-dark btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                        title="Remove item" onClick={() => { handleClose(cartItem.id) }}>
                        <i className="fas fa-trash"></i>
                    </button>
                    {/* <!-- Data --> */}
                </div>


                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 qyant-price">
                    {/* <!-- Quantity --> */}
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <input type="number" id="qyantity-input" name="qty" value={input} min="1"
                            style={{
                                width: "80px",
                                textAlign: "center",
                                marginLeft: "90px"
                            }}

                            onChange={changeHandler}
                        />
                    </div>
                    {/* <!-- Quantity --> */}

                    {/* <!-- Price --> */}
                    <p className="text-start text-md-center price">
                        <strong>$&nbsp;{cartItem.price}</strong>
                    </p>
                    {/* <!-- Price --> */}
                </div>
            </div>
            {/* <!-- Single item --> */}

            <hr className="my-4" />


        </div>

    )
}

export default CartItem
