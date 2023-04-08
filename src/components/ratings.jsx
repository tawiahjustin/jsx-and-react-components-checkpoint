import React from 'react'
import svg from '../images/icon-star.svg'
import '../styles/ratings.css'
//ratings component
const FirstContainer = () => {
  return (
    <section className='Container'>
      <div className='Star-container'>
        <img src={svg} alt='' />
      </div>
      <div className='Text'>
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className='Ratings-container'>
        <div className='Ratings'>1</div>
        <div className='Ratings'>2</div>
        <div className='Ratings'>3</div>
        <div className='Ratings'>4</div>
        <div className='Ratings'>5</div>
      </div>
      <div className='SubmitBtn'>SUBMIT</div>
    </section>
  )
}
//exporting first container
export default FirstContainer
