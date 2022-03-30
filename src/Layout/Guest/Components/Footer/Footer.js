import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FooterCartDetail from '../../../Components/FooterCartDetail';

const Footer = props => {
    // props.productList
    // productList && productList.data.map(product => {
    //     const cartProduct = addToCart && addToCart.products.filter((cart)=>cart.product_id===product.id)
    // });
   
    const qty = props.addToCart && props.addToCart.products.length;
    let price = 0;
    let displayQty = 0;
    props.addToCart && props.addToCart.products.map((product)=>{
        price = Number(price) + Number(product.total_amount);
        displayQty = Number(displayQty) + Number(product.quantity);
        return price;
    });
    return (
        <Fragment>
            <footer className="footer_part">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-sm-6 col-lg-4">
                            <div className="single_footer_part">
                                <h4>Contact Information</h4>
                                <ul className="list-unstyled">
                                <li className="mb-2"><strong className="text-yellow">Timings:</strong> <a>10:00 AM to 10:00 PM</a> </li>
                                    <li className="mb-2"><strong className="text-yellow">Helpline:</strong> <a href="tel:+97466605252">+974 6660 5252</a> </li>
                                    <li className="mb-2"><strong className="text-yellow">Email :</strong>  <a href="mailto:contact@kees.qa">contact@kees.qa</a></li>                                </ul>
                            </div>
                            <div class="d-none d-sm-none d-md-block d-lg-block">
                        <a href="https://theqa.qa/certificates/details/f11cd127-ef14-4366-afdd-441ef7f1f11f"><img src="https://theqa.qa/badge/f11cd127-ef14-4366-afdd-441ef7f1f11f.svg" alt="trustmark-badge" width="200"/></a>
                        </div>
                        
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="single_footer_part">
                                <h4>Information</h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    {/* <li><Link to="#">Press</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="single_footer_part">
                                <h4>Quick Links</h4>
                                <ul className="list-unstyled">
                                    {/* <li><Link to="">COVID-19 and KEES</Link></li> */}
                                    <li><Link to="">Newsletter</Link></li>
                                    <li><Link to="/cart-order-list">Shopping Cart</Link></li>
                                    <li><Link to="/category/1">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="single_footer_part">
                                <h4>Policy</h4>
                                <ul className="list-unstyled">
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/terms-of-service">Terms of Service</Link></li>
                                    <li><Link to="/cencellation-and-returns">Cancellation & Returns</Link></li>
                                    {/* <li><Link to="#">Security</Link></li> */}
                                  
                                </ul>
                                
                            </div>
                            <div className="footer_icon social_icon mb-4">
                                <ul className="list-unstyled">
                                    <li><a href="https://web.facebook.com/kees.qa" target="_blank"  className="single_social_icon"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/kees.qa/" target="_blank" className="single_social_icon"><i className="fab fa-instagram"></i></a></li>
                                    {/* <li><Link href="#" className="single_social_icon"><i className="fas fa-globe"></i></Link></li>
                                    <li><Link href="#" className="single_social_icon"><i className="fab fa-behance"></i></Link></li> */}
                                    {/* <li><Link to="#" className="single_social_icon"><i className="fab fa-whatsapp"></i></Link></li> */}
                                    <li><a rel="noopener noreferrer" href="https://wa.me/97466605252" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
                                </ul>
                            </div>
                            <div class="d-sm-block d-md-none d-lg-none">
                        <a href="https://theqa.qa/certificates/details/f11cd127-ef14-4366-afdd-441ef7f1f11f"><img src="https://theqa.qa/badge/f11cd127-ef14-4366-afdd-441ef7f1f11f.svg" alt="trustmark-badge" width="200"/></a>
                    </div>
                        </div>

                    </div>

                </div>
                <div className="copyright_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_text">
                                    <p>Copyright &copy; 2020 KEES. All rights reserved</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {qty > 0 && <FooterCartDetail qty={displayQty} price={price} />}
            </footer>
        </Fragment>
    );

}


export default Footer;
