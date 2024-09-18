import React from 'react'
import FormSignUp from './FormSignUp'
import "./Form.css"
import rocket from "./rocket.jpg"

const Form = () => {
  return (
    <>
    <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img src={rocket} alt='' className='form-img' />
        </div>
        <FormSignUp/>
    </div>
    </>
  )
}

export default Form