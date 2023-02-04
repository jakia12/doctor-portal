import React, { useState } from 'react'
import { format } from 'date-fns';
//import Button from '../../components/button/Button';
import BookingModal from '../../components/bookingModal/BookingModal';


import { useQuery } from '@tanstack/react-query';
import { AuthState } from '../../context/AuthProvider';
import Spinner from '../../components/spinner/Spinner';
import { useForm } from 'react-hook-form';


const AvailableAppointments = ({ selected, setSelected }) => {
    //booking form register


    const { user, loading, setLoading } = AuthState();
    const [treatment, setTreatment] = useState(null);
    //modal data

    const date = format(selected, 'PP');


    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });


    //destructure data


    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setAppointmentOptions(data);
    //         })
    // }, []);




    // modal state
    const [show, setShow] = useState(false);

    const handleClick = (option) => {
        setShow(true);
        setTreatment(option);
        console.log(option.name);
    };

    //submit the form
    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;

        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(date, slot, name, email, phone);

        //create booking data object
        const booking = {
            appointmentDate: date,
            treatment: treatment ? treatment.name : "null",
            patient: name,
            slot: slot,
            price: treatment ? treatment.price : 'null',
            email: email,
            phone: phone,
        }

        //send data to the server
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Booking added successfully");
                    setShow(false);
                    setTreatment(null);
                    refetch();
                } else {
                    alert(data.message);
                }
            })
            .catch(err => console.log(err))





    }


    return (
        <>

            <section className='service_section py-14 lg:py-20 bg-gray-50'>
                <div className="container w-full lg:max-w-7xl mx-auto">
                    <p className="text-center font-semibold text-dark">
                        You picked {format(selected, 'PP')}
                    </p>
                    <div className={`loader ${(isLoading ? "block" : "hidden")}`}>
                        <Spinner />
                    </div>
                    <div className="py-10">
                        <div className="md:flex items-center flex-wrap">
                            {
                                appointmentOptions.map((option) => (


                                    <div className="w-full lg:w-4/12">
                                        <div className="m-4 lg:m-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{option?.name}</h5>
                                            </a>
                                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                                {option?.slots.length > 0 ? option.slots[0] : "Try another day"}
                                            </p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                                                {`${option?.slots.length} ${(option.slots?.length > 1 ? "spaces" : "space")}`}
                                            </p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                                                ${option?.price ? option?.price : "No price available"}
                                            </p>

                                            {/* <button
                                            type="button"
                                            className="text-white 
                                        bg-gradient-to-r from-pink-500 to-purple-500
                                        hover:bg-gradient-to-l   
                                        font-medium rounded-lg text-sm 
                                        px-7 py-3 mr-2 mb-2 "
                                            data-modal-toggle="authentication-modal"
                                        >
                                            Book Appointment
                                        </button> */}



                                            <label
                                                htmlFor="my-modal-5"
                                                className=" text-white 
                                             bg-gradient-to-r from-grFirst to-grSecond
                                             hover:bg-gradient-to-l   
                                             font-medium rounded-lg text-sm 
                                             px-7 py-3 mr-2 mb-2 "
                                                onClick={() => handleClick(option)}
                                                disabled={option?.slots.length === 0 ? true : false}
                                            >  Book Appointment</label>
                                            {treatment &&
                                                <BookingModal
                                                    treatment={treatment}
                                                    handleSubmit={handleSubmit}
                                                    date={date *
                                                    }
                                                />
                                            }



                                        </div>
                                    </div>



                                ))
                            }
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default AvailableAppointments
