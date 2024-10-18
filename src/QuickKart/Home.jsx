import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Hi, Welcome to QuickKart !</h1>
            <img src="./../../quickkart-images/homepage/homepage.png" alt="quickkart-icon"
                style={{ height: 280, width: 505, display: 'block', margin: 'auto' }} />
            <h3 className="text-center">Plunge into a plethora of products that will be delivered at your
                doorstep with just a click!
                <div>Enjoy the comfort of your home and let us do all the hard work of sourcing
                    the best quality products for all your daily needs.</div>
            </h3>
        </div>
    )
}

export default Home
