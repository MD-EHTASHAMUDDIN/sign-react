import React from 'react'
import'./LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import tool_icon from '../Assets/tool.webp'
import google_icon from '../Assets/google.jpg'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="tool">
                <img src={tool_icon} alt="" />
            </div>
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
      
        <div className="submit-container">
            <div className="submit">Sign In</div> 
           
        </div>
        <div className="forgot-password">
            Don't have an account <span>Sign Up</span>
        </div>
    </div>
  )
}

export default LoginSignup
