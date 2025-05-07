import React, { useState } from 'react';
import './CSS/LoginSignup.css';

function LoginSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    if (formData.fullName && formData.email && formData.password && formData.agreed) {
      try {
        const response = await fetch('http://localhost:8080/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert('Sign-up successful!');
        } else {
          alert('Error occurred during sign-up.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong.');
      }
    } else {
      alert('Please fill all fields and agree to the terms.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;




// import React from 'react'
// import './CSS/LoginSignup.css'
// function LoginSignup() {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Full Name'/>
//           <input type="email" placeholder='Email Address' />
//           <input type="password" placeholder='Password' />
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
//         <div className="loginsignup-agree">
//           <input type="checkbox"  name='' id=''/>
//           <p>By continuing I agree to the terms of use and privacy policy</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup
