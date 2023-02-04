import React from 'react'
import { AuthState } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const BookingModal = ({ treatment, handleSubmit, date }) => {

    const { user } = AuthState();

    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 lg:max-w-lg">
                    <div className=' form_wrapper bg-white px-6 py-3  mx-auto  rounded'>

                        <h2 className="text-3xl font-semibold text-dark  my-2 text-center">{treatment?.name}</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                            <div className="mb-1">

                                <input
                                    type="text"
                                    name="date"
                                    id="data"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={date}
                                    readOnly
                                    required

                                />

                            </div>
                            <div className="mb-1">

                                <select
                                    id="slot"
                                    name="slot"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                >
                                    {treatment?.slots.map((slot) => (
                                        <option selected value={slot}> {slot}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="mb-1">

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={user ? user.displayName : "Unauthorized"}
                                    required
                                />

                            </div>
                            <div className="mb-1">

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    defaultValue={user ? user.email : "Unauthorized"}
                                    readOnly
                                    required
                                />

                            </div>
                            <div className="mb-1">

                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder='Your Phone number'
                                    required
                                />

                            </div>
                            {
                                user?.email ? (

                                    <button className='bg-lightBlue text-white py-2 rounded-lg text-lg' type="submit" >
                                        Book Now
                                    </button>
                                ) :

                                    <Link to="/login">
                                        <button className='bg-lightBlue text-white py-2 rounded-lg w-full text-lg' type="submit" >
                                            Book Now
                                        </button>
                                    </Link>

                            }
                        </form>


                    </div>
                </div>
                <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn">Close</label>
                </div>
            </div>

        </div>
    )
}

export default BookingModal
