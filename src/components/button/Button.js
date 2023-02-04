import React from 'react'

const Button = ({ children }) => {
    return (
        <button type="button" className="text-white 
        bg-gradient-to-r from-grFirst to-grSecond
             hover:bg-gradient-to-l   
            font-medium rounded-lg text-sm 
            px-7 py-3 mr-2 mb-2 ">
            {children}
        </button>
    )
}

export default Button

