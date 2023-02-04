import React, { useState } from 'react'
import Chair from '../../images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ selected, setSelected }) => {




    return (
        <div className='md:flex items-center'>
            <div className="w-6/12">
                <div className="m-4">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}

                    />
                </div>
            </div>
            <div className="w-6/12">
                <div className="m-4">
                    <img src={Chair} alt="" className="w-full rounded" />
                </div>
            </div>
        </div>
    )
}

export default AppointmentBanner
