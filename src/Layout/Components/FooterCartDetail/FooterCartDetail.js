import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
const FooterCartDetail = (props) => {
console.log(props,"propsInFooterCartDetail")
// ReactPixel.trackCustom('AddToCart', props // or set to empty string
// );
    return (
        
        <Fragment>
            <Link to="/cart-order-list">
                <div className="viewbasket_data">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                View Basket - {props.qty && props.qty} {props.qty>1?'Qty ':'Qty '} | &nbsp; 
                       
                                { props.price && props.price.toFixed(2)} QAR
                        </div>
                      
                        </div>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}


export default FooterCartDetail;
