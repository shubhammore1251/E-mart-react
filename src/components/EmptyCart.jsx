import React from 'react'

const EmptyCart = () => {
    return (
        <div className="px-4 my-5 bg-white rounded-3">
            <div className="container py-4">
                <div className="row justify-content-center py-5 cart-empty-row">
                    <div className="col-md-4">
                        <h2 className='text-center'>Your Cart is Empty !</h2>
                        <img src="../images/empty-cart.jpg" width="450px"  height="500px" alt=""/>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default EmptyCart
