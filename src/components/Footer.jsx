import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <p className="footer-brand-name">
                            E-Mart
                        </p>

                        <div className="copywrite-text mb-5">
                            <p className="mb-0">
                                E-Mart by
                                <a className="ml-1" href="https://github.com/more1251" target="_blank" rel="noopener noreferrer">Shubham More</a>
                            </p>
                        </div>
                    </div>

                    <div className="footer-col-2">
                       <img src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-store-marketplace-itim2101-flat-itim2101-2.png" alt="shop-logo"/>
                        <p>We all are a Family, and
                            Our Main<br />motto is our customers satisfaction
                        </p>
                    </div>

                    <div className="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href="#0" className="links">Coupons</a></li>
                            <li><a href="#0" className="links">Blog post</a></li>
                            <li><a href="#0" className="links">Return Policy</a></li>
                            <li><a href="#0" className="links">Become a Affiliate</a></li>
                        </ul>
                    </div>

                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#0" className="links">Facebook</a></li>
                            <li><a href="#0" className="links">Instagram</a></li>
                            <li><a href="#0" className="links">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">© 2022 &nbsp; E-Mart.com</p>
            </div>

        </div>
    )
}

export default Footer