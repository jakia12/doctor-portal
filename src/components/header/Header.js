import React, { useState } from 'react'

import './Header.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { AuthState } from '../../context/AuthProvider';

const Header = () => {
    const { user, logOut, setLoading } = AuthState();
    //log out

    const handleLogOut = () => {

        logOut()
            .then(() => {

            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>

            <nav className="px-2 bg-darkSlate border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex items-center flex-col p-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:p-0 md:dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:p-0 md:dark:text-white" aria-current="page">About</Link>
                            </li>
                            <li>
                                <Link to="/appointment" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:p-0 md:dark:text-white" aria-current="page">Appointment</Link>
                            </li>
                            <li>
                                <Link to="/reviews" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:p-0 md:dark:text-white" aria-current="page">Reviews</Link>
                            </li>

                            {user?.email ? (
                                <>
                                    <li>
                                        <Link to="/dashboard" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:p-0 md:dark:text-white" aria-current="page">Dasgboard</Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="text-white 
                                    bg-gradient-to-r from-grFirst to-grSecond
                                     hover:bg-gradient-to-l   
                                    font-medium rounded-lg text-sm 
                                    px-7 py-3 mr-2 mb-2 "
                                        > Log out</button>

                                    </li>
                                </>
                            )
                                :
                                (<li>
                                    <Link to="/login" >
                                        <Button>Login</Button>
                                    </Link>
                                </li>)}
                            <li>
                                <Link to="/contact" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:p-0 md:dark:text-white" aria-current="page">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
