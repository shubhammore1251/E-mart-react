import React from 'react'
import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <div className="about-container">
            <Helmet title="EMart-About"/>
            <h1 className='text-center'>About Us</h1>

            <div className="row-container">

                <div className='text-container'>
                    <h3>Our Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident reprehenderit excepturi assumenda quae eos quis cupiditate perferendis aut debitis cum error quas accusamus saepe perspiciatis deserunt soluta ipsam, a minus dicta facere sunt voluptas voluptatem eum. Vel ullam, autem inventore dolor vitae non quae atque iure recusandae eos ab!</p>
                </div>

                <img src="images/vision.webp" alt="" />

            </div>

            <div className="row-container">

                <img src="images/approach.webp" alt="" />
                <div className='text-container'>
                    <h3>Our Approach</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident reprehenderit excepturi assumenda quae eos quis cupiditate perferendis aut debitis cum error quas accusamus saepe perspiciatis deserunt soluta ipsam, a minus dicta facere sunt voluptas voluptatem eum. Vel ullam, autem inventore dolor vitae non quae atque iure recusandae eos ab!</p>
                </div>

            </div>

            <div className="row-container">

                <div className='text-container'>
                    <h3>Our Process</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident reprehenderit excepturi assumenda quae eos quis cupiditate perferendis aut debitis cum error quas accusamus saepe perspiciatis deserunt soluta ipsam, a minus dicta facere sunt voluptas voluptatem eum. Vel ullam, autem inventore dolor vitae non quae atque iure recusandae eos ab!</p>
                </div>

                <img src="images/process.webp" alt="" />

            </div>


            <section className="newsletter">
                <div className="newsdt">
                    <h1>SignUp for Our Early Discount Notifications</h1>
                    <div className="news-form">
                        <input type="email" placeholder="abcd@example.com"/>
                            <a href="#0" className="button">SIGN UP</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
