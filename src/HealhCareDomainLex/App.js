import React from 'react'
import './App.css'
import Home from './Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import JoinAsCoach from './JoinAsCoach';
import Login from './Login';

const App = () => {
    return (
        <div>
            <div className='App'>
            
            <Routes>
                <Route path='*' element={<Outlet />}/>
                <Route index path='/' element={<Home />} />
                <Route path='/JoinAsCoach' element={<JoinAsCoach/>} />
                <Route path="/loginCoach" element={<Login/>} />
            </Routes>
            </div>
        </div>
    );
}

export default App
