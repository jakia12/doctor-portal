import React, { useState } from 'react'
import Button from '../../components/button/Button'
import ServiceCard from '../../components/serviceCard/ServiceCard'
import Slider from '../../components/slider/Slider'
import { services } from '../../data/fakeData'
import TrImg from '../../images/tr.png';
import CtaBg from '../../images/ap.png';
import Docs from '../../images/doc6.7.png';
import TestimonialSlider from '../../components/testimonialSlider/TestimonialSlider'

const Home = () => {


    return (
        <>
            <section className="services_section py-14  lg:py-20">
                <div className="container mx-auto w-full lg:max-w-6xl px-6 lg:px-6">
                    <div className="text-center pb-14">
                        <h2 className="text-4xl font-semibold text-dark">
                            Our Services
                        </h2>
                        <div className="my-4 bg-gradient-to-r from-grFirst to-grSecond  w-24 h-1 mx-auto">

                        </div>
                    </div>

                    {/* services card section */}
                    <div className="md:flex items-center">

                        {
                            services.map((service) => (
                                <div className="md:w-6/12 lg:w-4/12">
                                    <ServiceCard
                                        key={service._id}
                                        service={service}
                                    />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            {/* dental care section start */}
            <section className="dental_care_section bg-gray-100/50 py-14 lg:py-20">
                <div className="container w-full lg:max-w-5xl mx-auto px-6">
                    <div className="md:flex justify-center items-center">
                        <div className="w-ful lg:w-6/12">
                            <div className="relative mx-4 lg:mr-8">
                                <img src={TrImg} alt="" className="w-full rounded" />

                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 ">
                            <div className="text-left mx-4 lg:ml-8 py-8 lg:py-6">
                                <h2 className="font-medium text-4xl text-dark mb-5">
                                    Exceptional Dental Care, on Your Terms
                                </h2>
                                <p className="mb-5">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                                </p>
                                <Button>Get Started</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* appointment cto section */}
            <section className="appointment_section  bg-no-repeat relative   py-10 lg:py-14" style={{ backgroundImage: `url(${CtaBg})` }}>
                <div className=" con_wrapper ">
                    <div className="container w-full lg:max-w-6xl mx-auto px-6 lg:px-10">
                        <div className="md:flex justify-center items-center ">

                            <div className="w-ful lg:w-6/12 hidden lg:block  ">
                                <div className="lg:absolute left-10 -top-10  img_wrapper mr-8">
                                    <img src={Docs} alt="" className="max-w-full  rounded" />

                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 ">
                                <div className="text-left mx-4 lg:ml-8 py-8 lg:py-6">
                                    <h2 className="text-pink-500 text-xl font-semibold mb-5">Appointment</h2>
                                    <h3 className="font-medium text-4xl text-white mb-5">
                                        Make an appointment Today
                                    </h3>
                                    <p className="mb-5 text-gray-200">
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                                    </p>
                                    <Button>Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* testimonial section */}
            <section className="testimonial_section py-14 lg:py-20">
                <div className="container w-full md:max-w-7xl mx-auto px-6">
                    <div className="text-center pb-10">
                        <h2 className="text-4xl font-semibold text-dark">
                            What our client say
                        </h2>
                        <div className="my-4 bg-gradient-to-r from-pink-500 to-purple-500  w-24 h-1 mx-auto">

                        </div>
                    </div>
                    {/* testimonial slider */}
                    <TestimonialSlider />
                </div>
            </section>
        </>


    )
}

export default Home
