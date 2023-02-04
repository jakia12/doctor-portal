import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import DeleteModal from '../../../components/deleteModal/DeleteModal';

const ManageDoctors = () => {

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctor'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error)
            }
        }
    })

    //set delete state 

    const [show, setShow] = useState(false);
    const [deletedDoctor, setDeletedDoctor] = useState(null);

    const handleShow = (doctor) => {
        setShow(true);
        setDeletedDoctor(doctor);

    }

    //close the modal
    const handleClose = () => {
        setDeletedDoctor(null);
        setShow(false);
    }


    //delete the doctor data
    // const handleDelete = () => {

    //     const url = `http://localhost:5000/doctors/${deletedDoctor._id}`;
    //     fetch(url, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 alert('doctor is deleted successfully');
    //                 setShow(false);
    //                 refetch();

    //             }
    //         })
    //         .catch(err => console.log(err))


    // }

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctors/${deletedDoctor._id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('doctor deleted successfully');
                    setDeletedDoctor('');
                    refetch();
                }
            })
            .catch(err => console.log(err))

    }
    //update the doctor 






    return (
        <div>

            <div className=" relative shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Doctor image
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Doctor name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                speciality
                            </th>

                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {doctors?.map((doctor) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={doctor._id}
                            >
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img src={doctor.image} alt="" className="rounded-full w-16 h-16" />
                                </th>
                                <td className="py-4 px-6">
                                    {doctor.name}
                                </td>
                                <td className="py-4 px-6">
                                    {doctor.email}
                                </td>
                                <td className="py-4 px-6">
                                    {doctor.speciality}
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <button className="font-medium mr-3 rounded-lg dark:text-blue-500 bg-yellow-300 text-white py-2.5 px-8 ">Edit</button>

                                    <label
                                        htmlFor="my-modal-6"
                                        className=" text-white 
                                            bg-red-600
                                             hover:bg-gradient-to-l   
                                             font-medium rounded-lg text-sm 
                                             px-7 py-2.5 mr-2 mb-2 "
                                        onClick={() => handleShow(doctor)}
                                    >Delete</label>

                                    {
                                        deletedDoctor && (

                                            // <DeleteModal
                                            //     deletedDoctor={deletedDoctor}
                                            //     handleDelete={handleDelete}
                                            // />
                                            <>
                                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                                <div className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box text-center">
                                                        <h3 className="font-medium text-lg">Are you sure you want to delete {deletedDoctor.name}!</h3>

                                                        <div className="modal-action">
                                                            <button
                                                                htmlFor="my-modal-6"
                                                                className=" text-white 
                                                                
                                                                hover:bg-gradient-to-l   
                                                                font-medium rounded-lg text-sm btn
                                                                btn-error mr-2 mb-2 "
                                                                onClick={handleDelete}
                                                            >Delete</button>

                                                            <label htmlFor="my-modal-6" className="btn">Cancel</label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    }
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
            {/* delete pop up */}

        </div >
    )
}

export default ManageDoctors
