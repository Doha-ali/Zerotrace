import React from 'react'
import Robot from '../images/robot.png'
import './secchatbot.css'
import { useNavigate } from 'react-router-dom'

export const Secchatbot = () => {
    const navigate = useNavigate()
  return (
    <div className='secchat'>
        <section className='chatText'>
            <div>
            <p>Try Our Chatbot</p>
            <button className='chatStart' onClick={() => navigate("/Chatbot")}>Start</button>
            </div>
        </section>
        <section className='chatimage'>
            <img src={Robot} alt='...' className='mr'/>
        </section>
    </div>
  )
}
