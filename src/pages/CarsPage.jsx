import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";


function CarsPage() {
    return (
        <div>
            {/* <Navigation /> */}
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__item">
                                    <img
                                        className="selected-car"
                                        src="../images/beemer.jpeg"
                                        alt=""
                                    />
                                </div>


                            </div>
                            <div class="car-slider">
                                <h3>Carousel</h3>
                                <div class="owl-carousel car-carousel owl-theme">
                                    <div class="item">
                                        <div>
                                            <div class="item-wrapper">
                                                <img
                                                    className="selected-car-slider"
                                                    src="https://imgd.aeplcdn.com/0x0/n/cw/ec/41217/toyota-vellfire-right-front-three-quarter5.jpeg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="product__details__text">
                                <div className="product__details__price">$50.00</div>
                                <p>
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                    amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit
                                    amet quam vehicula elementum sed sit amet dui. Proin eget
                                    tortor risus.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <Footer /> */}
        </div>
    );
}

export default CarsPage;
