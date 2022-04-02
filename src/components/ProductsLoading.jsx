import React from 'react'
import Skeleton from 'react-loading-skeleton';

const ProductsLoading = () => {
    return (
            <div className='d-flex skeleton' style={{marginTop: "-50px", marginRight:"200px"}}> 
                <div className="col-md-3 me-5">
                    <Skeleton height={350}/>
                </div>
    
                <div className="col-md-3 me-5">
                    <Skeleton height={350}/>
                </div>
    
                <div className="col-md-3 me-5">
                    <Skeleton height={350}/>
                </div>
    
                <div className="col-md-3 me-5">
                    <Skeleton height={350}/>
                 </div>
        </div>
            
        
    )
}

export default ProductsLoading
