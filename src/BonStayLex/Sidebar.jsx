import React from 'react'

const Sidebar = () => {
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        // Add more menu items as needed
    ];

    return (
        <div className='container'>
            <div className='sidebar'>
                <div className='top_section'></div>
                <h1 className='logo'>BonStay</h1>
                <div className='bars' >
                    <i className="fas fa-bars"></i>
                    
                </div>
            </div>


        </div>
    )
}

export default Sidebar
