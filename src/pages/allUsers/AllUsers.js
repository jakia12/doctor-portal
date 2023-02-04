import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    //handle make admin
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('you make admin successfully');
                    refetch();
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <section className='py-1'>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs table_head text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                User name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Email
                            </th>
                            {/* <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th> */}
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr className="bg-white row_border border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {user.name}
                                </th>
                                <td className="py-4 px-6">
                                    {user.email}
                                </td>

                                <td className="py-4 px-6 text-right">
                                    {user?.role !== 'admin' && <button
                                        className="rounded-lg font-medium text-white bg-green-500  dark:text-blue-500 py-2.5 px-7 mr-3 "
                                        onClick={() => handleMakeAdmin(user)}

                                    >Make Admin</button>}
                                    <button className="rounded-lg font-medium text-white bg-red-500  dark:text-blue-500 py-2.5 px-7 ">Delete</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default AllUsers
