import React from 'react'
import { Helmet } from 'react-helmet'

const Account = () => {
    return (
        <section className="vh-100">
            <Helmet title="EMart-Account"/>
            <div className="container-fluid h-custom mt-4">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://img.freepik.com/free-vector/purchasing-habits-abstract-concept_335657-2995.jpg?t=st=1648764892~exp=1648765492~hmac=b2e1677ed44853bd289edaf80bd0e382c1e4967adb3c66c4c31356454b81b7a9&w=740"
                            className="img-fluid" alt="img"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start social-icons">
                                <p className="lead mb-0 me-3 ms-5 fw-bold">Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1 rounded">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1 rounded">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1 rounded">
                                    <i className="fa fa-google"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                           
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                            </div>

                            
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password"/>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2 reg-login">
                                <button type="button" className="btn btn-lg"
                                >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Account
