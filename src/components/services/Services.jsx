import React from 'react'
import './services.css'
import services1 from '../../assets/services1.png'
import services2 from '../../assets/services2.png'
import services3 from '../../assets/services3.png'
import services4 from '../../assets/services4.png'
import services5 from '../../assets/services5.png'
import servicesimage1 from '../../assets/servicesimage1.png'
import servicesimage2 from '../../assets/servicesimage2.png'
import servicesimage3 from '../../assets/servicesimage3.png'
import committed from '../../assets/committed.png'
import responsible from '../../assets/responsible.png'
import progress from '../../assets/progress.png'
import Footer from '../footer/Footer'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-about">
            <p>About</p>
            <h1>We love to make great things, things that matter.</h1>
            <p>Funding handshake buyer business-to-business metrics iPad partnership. 
                First mover advantage innovator success deployment non-disclosure.</p>
        </div>
        <div className="services-image">
            <div className="services-image-col1">
                <img src={services1} alt='' />
                <img src={services2} alt='' />
            </div>
            <div className="services-image-col2">
                <img src={services3} alt='' />
            </div>
            <div className="services-image-col3">
            <img src={services5} alt='' />
                <img src={services4} alt='' />
            </div>
        </div>
        <div className="services-story">
            <p>Our story</p>
            <h1>Handshake infographic mass market crowdfunding iteration.</h1>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. 
            Traction stock user experience deployment beta innovator incubator focus. 
            Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. 
            Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
        </div>
        <div className="services-numbers">
        <p>Our numbers</p>
        <h1>Handshake infographic mass market crowdfunding iteration.</h1>
        <div className="services-numbers-details">
          <div className="services-numbers-details-col1">
            <h1>120m</h1>
            <p>Cool feature title</p>
          </div>
          <div className="services-numbers-details-col2">
            <h1>10.000</h1>
            <p>Cool feature title</p>
          </div>
          <div className="services-numbers-details-col3">
            <h1>250</h1>
            <p>Cool feature title</p>
          </div>
        </div>
      </div>
      <div className="services-team">
        <div className="services-team-text">
            <p>Our team</p>
            <h1>The leadership team</h1>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. 
                Traction stock user experience deployment beta innovator incubator focus. </p>
        </div>
        <div className="services-team-image">
            <div className="services-team-image-col1">
                <img src={servicesimage1} alt='' />
                <p>Michael Scott</p>
                <span>General Manager</span>
            </div>
            <div className="services-team-image-col2">
                <img src={servicesimage2} alt='' />
                <p>Dwight Schrute</p>
                <span>General Manager</span>
            </div>
            <div className="services-team-image-col3">
                <img src={servicesimage3} alt='' />
                <p>Pam Beetsley</p>
                <span>General Manager</span>
            </div>
        </div>
      </div>
      <div className="services-values">
            <div className="services-values-text">
                <p>Our values</p>
                <h1>Things in we believe</h1>
                <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. 
                    Traction stock user experience deployment beta innovator incubator focus. </p>
            </div>
            <div className="services-values-details">
                <div className="services-values-details-row1">
                    <img src={committed} alt='' />
                    <div className="values-details-row1-text">
                        <span>We are commited.</span>
                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                    </div>
                </div>
                <div className="services-values-details-row2">
                    <img src={responsible} alt='' />
                    <div className="values-details-row2-text">
                        <span>We are responsible.</span>
                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                    </div>
                </div>
                <div className="services-values-details-row3">
                    <img src={progress} alt='' />
                    <div className="values-details-row3-text">
                        <span>We aim for progress.</span>
                        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="services-footer">
            <Footer />
        </div>
    </div>
  )
}

export default Services