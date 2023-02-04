import React from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    //destructure the service data
    const { _id, title, icon, subTitle } = service;

    return (


        <div className=" bg-white text-center rounded-lg   shadow-lg shadow-indigo-200  md:m-3.5 border border-indigo-100 dark:bg-gray-800 dark:border-gray-700 p-8">
            <div className="flex items-center justify-center">
                <img className="service_img w-20 h-20 text-center mb-2" src={icon} alt="" />
            </div>
            <div className="py-3">
                <Link>
                    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>

            </div>
        </div>


    )
}

export default ServiceCard
