import React from 'react'
import { useRouteError } from 'react-router-dom'
import { AuthState } from '../../context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { user, logOut, setLoading } = AuthState();

    const handleLogOut = () => {

        logOut()
            .then(() => {

            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='text-center'>
            <p className="font-medium text-red-600 text-lg"> Something went wrong</p>

            <p className="text-red-600">
                {error.statusText || error.message}
            </p>
            <button
                onClick={handleLogOut}
                className="text-white 
                                    bg-gradient-to-r from-grFirst to-grSecond
                                     hover:bg-gradient-to-l   
                                    font-medium rounded-lg text-sm 
                                    px-7 py-3 mr-2 mb-2 "
            > Log out</button>

        </div>
    )
}

export default DisplayError
