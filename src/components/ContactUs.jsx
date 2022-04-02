/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Helmet } from 'react-helmet'

const ContactUs = () => {
    return (

        <div className="container">
            <Helmet title="EMart-ContactUs"/>
            <div className="bg-info contact4 overflow-hiddedn position-relative">
                <div className="row no-gutters">
                    <div className="container">
                        <div className="col-lg-6 contact-box mb-4 mb-md-0">
                            <div className="contact-cont">
                                <h1 className="title font-weight-bold mt-2">Contact Us</h1>
                                <form className="mt-3">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <input className="form-control text-white" type="text" placeholder="name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <input className="form-control text-white" type="email" placeholder="email address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <textarea className="form-control" rows="3" placeholder="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 d-flex align-items-center mt-2 submit-div">
                                            <button type="submit" className="btn bg-dark text-white px-3 py-2"><span> Submit</span></button>
                                            <span className="ms-auto font-weight-bold text-black align-self-center"><img src="https://img.icons8.com/ios-filled/50/000000/phone.png" width={25} alt='phone-img'/>&nbsp;212-200-7173</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 right-image p-r-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059729384!2d-74.25986816097694!3d40.69714941285065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1648767212440!5m2!1sen!2sin"
                            width="100%" height="470" frameborder="0" style={{border:"0"}} allowfullscreen data-aos="fade-left" data-aos-duration="3000" title="myMap"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
