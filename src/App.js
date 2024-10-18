import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import BootstrapDemo from './StateComponents/BootstrapDemo'
import Register from './StateComponents/Register'
import PageNotFound from './StateComponents/PageNotFound'
import CommonLayout from './StateComponents/CommonLayout';
import GetAllUsers from './StateComponents/GetAllUsers';
import ViewUser from './StateComponents/ViewUser';
import ContactUS from './StateComponents/ContactUS';


function App() {

  return (
    <div className="App">
      <ul className='menu'>
        {/* <li><a href="/users">Users</a></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">SignUp</NavLink></li>
        <li><NavLink to="/user">Get All Users</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
        <li><NavLink to="/PageNotFound">PageNotFound</NavLink></li>

      </ul>


      <Routes>
        <Route path="/" element={<CommonLayout />} />
        <Route index element={<BootstrapDemo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<ViewUser />} />
        <Route path='/user' element={<GetAllUsers />}></Route>
        <Route path='/PageNotFound' element={<PageNotFound />} />
        <Route path='/contact' element={<ContactUS/>}/>
      </Routes>


    </div>
  );
}
export default App;

