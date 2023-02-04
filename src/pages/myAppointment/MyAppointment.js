import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider'
import './MyAppointment.css';

const MyAppointment = () => {
    const { user } = AuthState();

    // const url = `http://localhost:5000/bookings?email=${user?.email}`;

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')} `
                    }
                });
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err)
            }
        }
    });
    return (
        <div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase table_head dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Patient name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Treatment
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Time
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Payment
                            </th>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking) => (
                                <tr className="bg-white row_border  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={booking._id}>
                                        {booking.patient}
                                    </th>
                                    <td className="py-4 px-6">
                                        {booking.treatment}
                                    </td>
                                    <td className="py-4 px-6">
                                        {booking.appointmentDate}
                                    </td>
                                    <td className="py-4 px-6">
                                        {booking.slot}
                                    </td>
                                    <td className="py-4 px-6">
                                        {
                                            booking.price && !booking.paid ? (
                                                <Link to={`/dashboard/payment/${booking._id}`}>
                                                    <button className='py-2.5 px-7 bg-grFirst text-small font-medium text-white rounded-lg'>Pay</button>
                                                </Link>
                                            ) : <button className='py-2.5 px-7 bg-grFirst text-small font-medium text-white rounded-lg'>Paid</button>
                                        }

                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default MyAppointment
