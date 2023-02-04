import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const error = useRouteError();
    return (
        <div className='text-center py-14'>
            <h3 className='text-red-500'>
                OOPs!! something went wrong.
            </h3>
            <p className='text-red-500'>
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorElement
