import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Cruise from '../cruises/Cruise';

export default function LoginPage() {
  const adminUser = {
    email: 'admin@admin.com',
    name: 'Karel',
  };

  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState('');


  const Login = (details) => {
    console.log(details);
    if (details.email === adminUser.email && details.name === adminUser.name) {
    //   console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
    //   console.log('Details not match');
    }
  };


  return (

    <div className="login-container">

      {(user.email !== '') ? (
        <Cruise />
      ) : (
        <div>
          <div className="form-container">
            <form onSubmit={submitHandler}>
              <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR! */}
                <div className="form-group">
                  <label htmlFor="name">
                    Name:
                    <input type="text" name="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email:
                    <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
                  </label>
                </div>

                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}
