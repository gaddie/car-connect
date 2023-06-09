import React from "react";
import ExclusiveOffersCard from "../ExclusiveOffersCard";
import WhatsnewCard from "../WhatsnewCard";
import TestimonialCard from "../TestimonialCard";


function HomePage() {
    return <div>
        <div className="slider">
                <input type="radio" name="slider" title="slide1" checked className="slider__nav" />
                <input type="radio" name="slider" title="slide2" className="slider__nav" />
                <input type="radio" name="slider" title="slide3" className="slider__nav" />
                <input type="radio" name="slider" title="slide4" className="slider__nav" />
                <div className="slider__inner">

                    <div className="slider__contents">
                        <img src="../images/beemer.jpeg" alt="car image" />
                        <h2 className="slider__caption">Car Connect</h2>
                        <p className="slider__txt">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos,
                            corporis minima!
                        </p>
                    </div>

                    <div className="slider__contents">
                        <img src="../images/mercedece.webp" alt="car image" />
                        <h2 className="slider__caption">Car Connect</h2>
                        <p className="slider__txt">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos,
                            corporis minima!
                        </p>
                    </div>

                    <div className="slider__contents">
                        <img src="../images/rangerover.webp" alt="car image" />
                        <h2 className="slider__caption">Car Connect</h2>
                        <p className="slider__txt">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos,
                            corporis minima!
                        </p>
                    </div>

                    <div className="slider__contents">
                        <img src="../images/beemer.jpeg" alt="car image" />
                        <h2 className="slider__caption">Car Connect</h2>
                        <p className="slider__txt">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos,
                            corporis minima!
                        </p>
                    </div>

                </div>
            </div>

            {/* exclusive offers section */}

            <div className="container-fluid section-two">
                <h2 className="title">Exclusive Offers</h2>
                <div className="row">

                    <ExclusiveOffersCard
                        name='Toyota'
                        price='1,200,000'
                        imageLink='https://www.qaizen.co.ke/wp-content/uploads/2020/04/Mark-X.jpg'
                    />

                    <ExclusiveOffersCard
                        name='Toyota'
                        price='1,200,000'
                        imageLink='https://www.qaizen.co.ke/wp-content/uploads/2020/04/Mark-X.jpg'
                    />

                    <ExclusiveOffersCard
                        name='Toyota'
                        price='1,200,000'
                        imageLink='https://imgd.aeplcdn.com/1200x900/cw/ec/10219/Toyota-Land-Cruiser-Prado-Exterior-127835.jpg?wm=0&q=75'
                    />

                    <ExclusiveOffersCard
                        name='Toyota'
                        price='1,200,000'
                        imageLink='https://www.qaizen.co.ke/wp-content/uploads/2020/04/Mark-X.jpg'
                    />

                </div>

            </div>

            {/* whats new section */}

            <div className="container section-three">
                <div className="home-demo">
                    <h3 className="title">Whats New</h3>
                    <div className="owl-carousel new-owl-carousel owl-theme">

                        <div className="item">
                            <WhatsnewCard
                                name='Toyota'
                                image="../images/mercedece.webp"
                                price="1,200,000"
                            />
                        </div>

                        <div className="item">
                            <WhatsnewCard
                                name='Toyota'
                                image="../images/rangerover.webp"
                                price="1,200,000"
                            />
                        </div>

                        <div className="item">
                            <WhatsnewCard
                                name='Toyota'
                                image="../images/x5.png"
                                price="1,200,000"
                            />
                        </div>

                        <div className="item">
                            <WhatsnewCard
                                name='Toyota'
                                image="../images/mercedece.webp"
                                price="1,200,000"
                            />
                        </div>

                        <div className="item">
                            <WhatsnewCard
                                name='Toyota'
                                image="../images/x5.png"
                                price="1,200,000"
                            />
                        </div>

                        <div className="item">
                            <WhatsnewCard
                                name='Toyota'
                                image="../images/rangerover.webp"
                                price="1,200,000"
                            />
                        </div>

                    </div>
                </div>
            </div>



            {/* where to find us section */}
            <div className="location">
                <div className="location-img">
                    <img className="city-img" src="../images/nairobi.jpeg" alt="Nairobi image" />
                </div>

                <div className="title-block">
                    <h1 className="title">WHERE TO FIND US</h1>
                </div>

                <div className="text-block container">
                    <i className="fa-sharp fa-solid fa-location-dot icon-4x"></i>
                    <h2>Nairobi</h2>
                    <p>What a beautiful sunrise</p>
                </div>
            </div>
            



            {/* testimonials */}
            <div className="testimonials-page">
                <div className="container">
                    <h1 className="title">TESTIMONIALS</h1>
                    <div className="row testimonial-section">
                        <div className="col-md-12">
                            <div id="testimonial-slider" className="owl-carousel">

                                <TestimonialCard
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros
                                            imperdiet, sit amet hendrerit nisi vehicula."
                                    name="Williamson"
                                />
                                <TestimonialCard
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros
                                            imperdiet, sit amet hendrerit nisi vehicula."
                                    name="Williamson"
                                />
                                <TestimonialCard
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros
                                            imperdiet, sit amet hendrerit nisi vehicula."
                                    name="Williamson"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}

export default HomePage;