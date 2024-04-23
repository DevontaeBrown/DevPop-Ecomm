import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className ='newsletter'>
        <h1>Get Exclusive Offers On Your Emails</h1>
        <p>Subscribe to our newsletter and stay updated!</p> 
        <div>
            <input type='email' placeholder='Your Email'/>   
            <button>Subscribe</button>
        </div>
    </div>
   
  )
}

export default Newsletter