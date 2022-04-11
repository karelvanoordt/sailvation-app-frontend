import React, { useState } from 'react';

function SignupForm({ Signup }) {
  const [details, setDetails] = useState({ name: '', email: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    Signup(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Signup</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
        </div>

        <input type="submit" value="Signup" />
      </div>
    </form>
  );
}

export default SignupForm;
