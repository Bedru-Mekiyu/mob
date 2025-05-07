import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hero_image from '../Assets/newproduct_2.avif'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals only</h2>
         <div>
            <div className="hero-hand-icon">
                <p>new</p>
                
                {/* <img src={hand_icon} alt="" /> 👋*/}

            </div>
            <p>collection</p>
            <p>for everyone</p>
         </div>
         <div className="hero-latest-btn">
            <div>
                Letest Collection
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
            </div>
            {/* <img src={arrow_icon} alt="" /> */}
         </div>
      </div>
    



    <div className="hero-right">
    <img src={hero_image} alt="" />
    </div>
    </div>
  )
}

export default Hero
