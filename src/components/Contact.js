import React from 'react'
import PHONE from './assets/phone.jpg'

export const Contact = ()=>{
    return(
        <div className='contact-container' id='contact'>
            <h2>Contact </h2>
            <div className='contact-section'>
               <div className='contact-image'>
                    <img src={PHONE} alt='Contact' />
               </div>
               <div className='contact-form'>
                   <input className='form-input' type='text' placeholder='Subject' ></input>
                   <input className='form-input' type='email' placeholder='Email' ></input>
                   <textarea className='form-input area' type='text' placeholder='Message'></textarea>
                   <button className='form-btn'>Send</button>
               </div>
            </div>
        </div>
    )
}