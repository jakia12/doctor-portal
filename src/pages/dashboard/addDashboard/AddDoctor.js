import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    // const { data: specialities = [], isLoading, } = useQuery({
    //     queryKey: ['speciality'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/appointemetSpeciality');
    //         const data = await res.json();
    //         return data;
    //     }
    // });

    const { data: specialities = [] } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialilties');
            const data = await res.json();
            return data;
        }
    });

    const imgbbApiKey = process.env.REACT_APP_IMG_API_KEY;

    //navigate the user after submitting the form
    const navigate = useNavigate();

    const handleAddDoctor = (data) => {
        console.log(data);
        const image = data.img[0];
        console.log(image);

        const formData = new FormData();

        formData.append('image', image);



        const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);

                if (imgData.success) {
                    console.log(imgData.data.url);

                    // create doctor object

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: imgData.data.url

                    };


                    fetch('http://localhost:5000/users', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                alert('doctor is added successfully');
                            }

                            navigate('/dashboard/manageDoctors');

                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => console.log(err))


    }

    // create dostors now

    // const handleAddDoctor = (data) => {
    //     const image = data.img[0];
    //     console.log(image);

    //     const formData = new FormData();
    //     formData.append('image', image);


    //     //send image to the imgbb server
    //     const url = `https://api.imgbb.com/1/upload?key=REACT_APP_IMG_API_KEY`;

    //     fetch(url, {
    //         mehtod: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(imgData => {
    //             console.log(imgData)
    //         })
    //         .catch(err => console.log(err))




    // }

    /**
     * image hosting server
     * file syestem of 
     * mongodb
     */
    return (
        <div>
            <div className=' form_wrapper bg-white  px-10 py-10 w-full mx-auto lg:max-w-lg rounded'>
                <h2 className="text-3xl font-semibold text-dark mt-5 mb-10 text-center">Add doctors!</h2>
                <form onSubmit={handleSubmit(handleAddDoctor)} className="flex flex-col gap-4 text-left">


                    <div className="mb-1">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>

                        <input
                            type="text"
                            id="name"
                            className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.name ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Your name"
                            {...register("name", {
                                required: "Name is required",

                            })}


                        />
                        {errors.name && <p className='text-red-500 mt-1'>{errors.name.message}</p>}
                    </div>
                    <div className="mb-1">
                        <label for="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.email ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`}
                            placeholder="Your email"
                            {...register("email", {
                                required: "Email is required",


                            })}
                        />
                        {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                    </div>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload image</label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files"
                        type="file"
                        {...register("img", {
                            required: "Image is required",


                        })}
                    />
                    {errors.img && <p className='text-red-500 mt-1'>{errors.img.message}</p>}

                    <div className="mb-1">
                        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Speciality</label>

                        <select id="default"
                            name="speciality"
                            {...register("speciality", {
                                required: "Speciality is required",


                            })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {
                                specialities?.map((speciality) => (
                                    <option key={speciality._id} selected value={speciality.name}>{speciality.name}</option>
                                ))
                            }

                        </select>
                        {errors.speciality && <p className='text-red-500 mt-1'>{errors.speciality.message}</p>}
                    </div>
                    <button className={` text-white py-2 rounded-lg text-lg  bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l")}`} type="submit">
                        Add Doctor
                    </button>
                </form>

            </div>
        </div>
    )
}

export default AddDoctor
