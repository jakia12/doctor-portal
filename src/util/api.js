

// get single Booking

export const getSingleBooking = async (id) => {
    try {
        const res = await fetch(`http://localhost:5000/bookings/${id}`);
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}