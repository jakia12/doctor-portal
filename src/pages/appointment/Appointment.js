import React, { useState } from 'react'
import AppointmentBanner from '../appointmentBanner/AppointmentBanner'
import AvailableAppointments from '../availableAppointments/AvailableAppointments'

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <section className='banner_section py-14 lg:py-20'>
            <div className="container w-full lg:max-w-6xl mx-auto">
                <AppointmentBanner
                    selected={selected}
                    setSelected={setSelected}
                />
                <AvailableAppointments
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>

        </section>
    )
}

export default Appointment
