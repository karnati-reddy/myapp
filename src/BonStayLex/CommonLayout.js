import React from 'react'
import { Outlet } from 'react-router-dom'

const CommonLayout = () => {
    return (
        <>
        <Outlet/>
        <div className='bg-primary p-2'>
            Footer
        </div>
        </>
    )
}

export default CommonLayout
