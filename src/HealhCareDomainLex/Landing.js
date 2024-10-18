import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Display from './Display';
// import Display from '../components/Display';
const Landing = () => {
    let params = useParams();
    return <>

        <h4>Welcome&nbsp; {params.name} to UI courses</h4>
        <h4> Just Launched...</h4>
        <Link to="display/Angular">
            Angular
        </Link> <br />
        <Link to="display/React">
            React
        </Link> <br />
        <Link to="display/Express">
            Express
        </Link> <br />
        <Link to="display/Vue">
            Vue
        </Link>
        <Routes>
            <Route path="display/:topic" element={< Display/>} />
        </Routes>

    </>
}
export default Landing;
