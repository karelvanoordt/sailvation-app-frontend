/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchAllUsers } from '../../redux/Users/users';
import '../../styles/sign.css'

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const users =   useSelector((state) => state.userReducer);
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    if(users.langth !== 0) dispatch(fetchAllUsers());
  }, [dispatch]);
  const routeChange = () => {
    const path = `/cruises`;  
    history.push(path);
  };
  const popUpWrongEmail = () => {
    const message = document.createElement('p');
    message.innerText = 'Wrong Email';
    const wrapper = document.getElementById('wrong-email');
    return wrapper.appendChild(message);
  }
  const submitHandler = () => {
    users.data.map((user) => {
      if (user.email === userEmail) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', `${user.id}`);
        localStorage.setItem('userType', `${user.admin}`)
        routeChange();
      } else {
        popUpWrongEmail()
      }
    });
  };
  return (
        <div className='container mt-5'>
          <div className="form-container d-flex">
            <div className='m-4'>
              <h2>Don't you have a account</h2>
              <Link to="/signup" className='mt-3'>You can Sign Up Here</Link>
            </div> 
            <form  className='m-4'>
              <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group mt-4">
                  <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                  </label>
                </div>
                <div id="wrong-email"></div>
              <button className='mt-3 btn btn-success' type="submit" onClick={(e) => {
                e.preventDefault();
                submitHandler();
              }}
              >
                Login
              </button>
              </div>
            </form>
          </div>
        </div>
  )
}