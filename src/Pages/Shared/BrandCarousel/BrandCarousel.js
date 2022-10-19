import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import p1 from '../../../assets/brands/p1.jpg';
import p2 from '../../../assets/brands/p2.jpg';
import p3 from '../../../assets/brands/p3.jpg';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={p3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;