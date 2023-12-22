import React from 'react'
import'./LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">
                Let's Get Started
            </div>
            <div className="texts">
                Welcome back! Please enter your details.
            </div>
            <div className="underline">

            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder=' Your name' />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email"  placeholder=' Your email address'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Your password' />
            </div>
        </div>
        <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">LogIn</div>
        </div>
    </div>
  )
}

export default LoginSignup