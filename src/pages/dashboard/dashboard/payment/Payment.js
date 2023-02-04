import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getSingleBooking } from '../../../../util/api';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_API_KEY);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, patinet, price, slot, appointmentDate } = booking;

    return (
        <div>
            <div className="px-20">
                <h2 className="text-dark font-medium text-2xl py-3">
                    {treatment}
                </h2>
                <p className="text-xl">
                    Please pay ${price} for your appoinment on {appointmentDate}
                </p>

                <div className="py-10 w-96 ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booking={booking}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export const loader = ({ params }) => {
    const uId = params.id;

    return getSingleBooking(uId);
}

export default Payment;
