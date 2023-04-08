import React from 'react'
import logo from '../images/illustration-thank-you.svg'
import '../styles/appreciation.css'
// appreciation component
const SecondContainer = () => {
  return (
    <section className='SecondContainer'>
      <div>
        <img src={logo} alt='' />
      </div>
      <div className='Selection'>You selected 4 out of 5</div>
      <div className='Message'>
        <h2>Thank you</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </section>
  )
}
//exporting appreciation component
export default SecondContainer
