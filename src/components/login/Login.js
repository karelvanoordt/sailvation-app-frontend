import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Cruise from '../cruises/Cruise';

export default function LoginPage() {
  const adminUser = {
    email: 'admin@admin.com',
    name: 'Karel',
  };

  const [user, setUser] = useState({ name: '', email: '' });

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

  //   const Logout = () => {
  //     console.log('Logout');
  //     setUser({
  //       name: '',
  //       email: '',
  //     });
  //   };

  return (

    <div className="login-container">

      {(user.email !== '') ? (
        <Cruise />
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}
