import React from 'react'
import Slider from "react-slick";
import { testimonials } from '../../data/fakeData';

const TestimonialSlider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,

        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
        // fade: true,
    };
    return (
        <div className='py-2'>



            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div className="">
                        <div className="p-10  text-left shadow-lg shadow-gray-200 rounded m-3">
                            <p className="text-gray-900">
                                {testimonial.description}
                            </p>
                            <div className="flex items-center mt-5">
                                <img src={testimonial.client.image} alt="" className="w-16 h-16 rounded-full border-2 border-pink-500" />

                                <div className="ml-4 text-left">
                                    <span className="text-dark font-medium text-lg">{testimonial.client.name}</span>
                                    <span className="text-gray-900 font-base text-sm mt-2 block">{testimonial.client.location}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

            </Slider>




        </div>
    )
}

export default TestimonialSlider
