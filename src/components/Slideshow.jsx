
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Slideshow() {
    return (
        <div className="carousel-wrapper" style={{"textAlign": "center"}}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay >
                <div className='SildeShow'>
                    <img src="https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=2000" />
                </div>
                <div className='SildeShow'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" />
                </div>
                <div className='SildeShow'>
                    <img src="https://images.template.net/wp-content/uploads/2016/11/15120131/Androll-Product-Sale-Banner.jpg" />
                </div>
            </Carousel>
        </div>
    );
}
