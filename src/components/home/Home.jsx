import React from 'react'
import './home.css'
import headerimage1 from '../../assets/header-image1.png'
import headerimage2 from '../../assets/header-image2.png'
import react from '../../assets/react.png'
import vue from '../../assets/vue.png'
import angular from '../../assets/angular.png'
import vscode from '../../assets/vscode.png'
import google from '../../assets/google.png'
import ourservices1 from '../../assets/ourservices1.png'
import ourservices2 from '../../assets/ourservices2.png'
import ourservices3 from '../../assets/ourservices3.png'
import connect1 from '../../assets/connect1.png'
import connectgraph from '../../assets/connectgraph.png'
import connect2 from '../../assets/connect2.png'
import connectgraph2 from '../../assets/connectgraph2.png'
import albus from '../../assets/albus.png'
import severus from '../../assets/severus.png'
import harry from '../../assets/harry.png'
import customers from '../../assets/customers.png'
import category1 from '../../assets/category1.png'
import category2 from '../../assets/category2.png'
import category3 from '../../assets/category3.png'
import chandler from '../../assets/chandler.png'
import rachel from '../../assets/rachel.png'
import monica from '../../assets/monica.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faCircleCheck, faFeather, faEye, faSun,
          faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <><div className='home'>
      {/*header start */}
      <div className="circle-design1">
      </div>
      <div className="circle-design2">
      </div>
      <div className="circle-design3">
      </div>
      <div className="home-row">
        <div className="home-header">
          <div className="home-header-text">
            <h1>Save time by building  fast with Boldo Template</h1>
            <p>Funding handshake buyer business-to-business metrics iPad partnership.
              First mover advantage innovator success deployment non-disclosure.</p>
            <div className="home-header-button">
              <button className='btn1'>Buy Template</button>
              <button className='btn2'>Explore</button>
            </div>
          </div>
        </div>
        <div className="home-image">
          <img src={headerimage1} alt='' className='image1' />
          <img src={headerimage2} alt='' className='image2' />
          <img src={headerimage2} alt='' className='image3' />
        </div>
      </div>
      <div className="home-brands">
        <img src={react} alt='' />
        <img src={vue} alt='' />
        <img src={angular} alt='' />
        <img src={vscode} alt='' />
        <img src={google} alt='' />
      </div>
      {/*header end */}

      {/*our services start */}
      <div className="home-ourservices">
        <div className="home-ourservices-text">
          <p>Our Services</p>
          <h1>Handshake infographic mass market crowdfunding iteration.</h1>
        </div>
        <div className="home-ourservices-image">
          <div className="ourservices-image1">
            <img src={ourservices1} alt='' />
            <p>Cool Feature Title</p>
            <span>Explore page&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></span>
            <hr></hr>
          </div>
          <div className="ourservices-image2">
            <img src={ourservices2} alt='' />
            <p>Cool Feature Title</p>
            <span>Explore page&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></span>
            <hr></hr>
          </div>
          <div className="ourservices-image3">
            <img src={ourservices3} alt='' />
            <p>Cool Feature Title</p>
            <span>Explore page&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} /></span>
            <hr></hr>
          </div>
        </div>
      </div>
      {/*our services end */}

      {/*connect start */}
      <div className="home-connect1">
        <div className="home-connect1-image">
          <img src={connect1} alt='' className='connect1' />
          <img src={connectgraph} alt='' className='connectgraph' />
        </div>
        <div className="home-connect1-text">
          <h1>We connect our customers with the best, and help them keep up-and stay open.</h1>
          <p><FontAwesomeIcon icon={faCircleCheck} /> &nbsp;&nbsp;&nbsp;We connect our customers with the best.</p>
          <p><FontAwesomeIcon icon={faCircleCheck} /> &nbsp;&nbsp;&nbsp;Advisor success customer launch party.</p>
          <p><FontAwesomeIcon icon={faCircleCheck} /> &nbsp;&nbsp;&nbsp;Business-to-consumer long.</p>
          <button>Start now</button>
        </div>
      </div>
      <div className="home-connect2">
        <div className="home-connect2-text">
          <h1>We connect our customers with the best, and help them keep up-and stay open.</h1>
          <p className='active'><FontAwesomeIcon icon={faFeather} /> &nbsp;&nbsp;&nbsp;We connect our customers with the best.</p>
          <p><FontAwesomeIcon icon={faEye} /> &nbsp;&nbsp;&nbsp;Advisor success customer launch party.</p>
          <p><FontAwesomeIcon icon={faSun} /> &nbsp;&nbsp;&nbsp;Business-to-consumer long.</p>
        </div>
        <div className="home-connect2-image">
          <img src={connect2} alt='' className='' />
          <img src={connectgraph2} alt='' className='connectgraph2' />
        </div>
      </div>
      {/*connect end */}

      {/*enterprise start */}
      <div className="home-enterprise">
        <div className="home-enterprise-text">
          <h1>An enterprise template to ramp up your company website</h1>
          <div className="enterprise-text-button">
            <button><FontAwesomeIcon icon={faArrowLeft} size='2x' /></button>
            <button><FontAwesomeIcon icon={faArrowRight} size='2x' /></button>
          </div>
        </div>
        <div className="home-enterprise-reviews">
          <div className="enterprise-reviews-albus">
            <p>“Buyer buzz partner network disruptive non-disclosure agreement business”</p>
            <div className="reviews-albus-image">
              <img src={albus} alt='' />
              <div className="albus-image-text">
                <p>Albus Dumbledore</p>
                <span>Manager @ Howarts</span>
              </div>
            </div>
          </div>
          <div className="enterprise-reviews-severus">
            <p>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</p>
            <div className="reviews-severus-image">
              <img src={severus} alt='' />
              <div className="severus-image-text">
                <p>Severus Snape</p>
                <span>Manager @ Slytherin</span>
              </div>
            </div>
          </div>
          <div className="enterprise-reviews-harry">
            <p>“Release facebook responsive web design business model canvas seed money monetization.”</p>
            <div className="reviews-harry-image">
              <img src={harry} alt='' />
              <div className="harry-image-text">
                <p>Harry Potter</p>
                <span>Team Leader @ Gryffindor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*enterprise end */}

      {/*customers start */}
      <div className="home-customers">
        <img src={customers} alt='' />
        <div className="home-customers-text">
          <div className="customers-text-col1">
            <h1>We connect our customers with the best, and help them keep up-and stay open.</h1>
          </div>
          <div className="customers-text-col2">
            <p>We connect our customers with the best?&nbsp;&nbsp; <FontAwesomeIcon icon={faCircleChevronDown} /></p>
            <p>Android research & development rockstar?&nbsp;&nbsp;  <FontAwesomeIcon icon={faCircleChevronDown} /></p>
          </div>
        </div>
      </div>
      {/*customers end */}

      <div className="home-blog">
        <p>Our Blog</p>
        <h1>Value proposition accelerator product management venture</h1>
        <div className="home-blog-image">
          <div className="blog-image-category1">
            <img src={category1} alt='' />
            <p>Category <span>January 08, 2023</span></p>
            <h1>Pitch termsheet backing validation focus release.</h1>
            <div className="image-category1-profile">
              <img src={chandler} alt='' />
              <p>Chandler Bing</p>
            </div>
          </div>
          <div className="blog-image-category2">
            <img src={category2} alt='' />
            <p>Category <span>January 08, 2023</span></p>
            <h1>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</h1>
            <div className="image-category2-profile">
              <img src={rachel} alt='' />
              <p>Rachel Green</p>
            </div>
          </div>
          <div className="blog-image-category3">
            <img src={category3} alt='' />
            <p>Category <span>January 08, 2023</span></p>
            <h1>Beta prototype sales iPad gen-z marketing network effects value proposition.</h1>
            <div className="image-category3-profile">
              <img src={monica} alt='' />
              <p>Monica Geller</p>
            </div>
          </div>
        </div>
        <button>Load More</button>
      </div>
    </div><div className="home-footer">
        <Footer />
      </div></>
  )
}

export default Home