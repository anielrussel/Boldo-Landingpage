import React from 'react'
import './product.css'
import jihyo from '../../assets/jihyo.webp'
import momo from '../../assets/momo.webp'
import sana from '../../assets/sana.webp'
import walter from '../../assets/walter.webp'
import jesse from '../../assets/jesse.jpg'
import Footer from '../footer/Footer'

const Product = () => {
  return (
    <div className='product'>

      <div className="product-about">
        <div className="about-text1">
          <p>About</p>
          <h1>We love to make great things, things that matter.</h1>
        </div>
        <div className="about-text2">
          <p>Funding handshake buyer business-to-business metrics iPad partnership. 
            First mover advantage innovator success deployment non-disclosure.</p>
        </div>
      </div>

      <div className="product-numbers">
        <p>Our numbers</p>
        <h1>Handshake infographic mass market crowdfunding iteration.</h1>
        <div className="product-numbers-details">
          <div className="numbers-details-col1">
            <h1>120m</h1>
            <p>Cool feature title</p>
          </div>
          <div className="numbers-details-col2">
            <h1>10.000</h1>
            <p>Cool feature title</p>
          </div>
          <div className="numbers-details-col3">
            <h1>250</h1>
            <p>Cool feature title</p>
          </div>
        </div>
      </div>

      <div className="product-story">
        <p>Our story</p>
        <h1>Handshake infographic mass market crowdfunding iteration.</h1>
        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. 
          Traction stock user experience deployment beta innovator incubator focus. 
          Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. 
          Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
      </div>

      <div className="product-team">
        <div className="product-team-text">
          <p>Our team</p>
          <h1>The people behind the work</h1>
          <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. 
            Traction stock user experience deployment beta innovator incubator focus. </p>
        </div>
        <div className="product-team-image1">
          <div className="team-image1-jihyo">
            <img src={jihyo} alt='' />
            <h1>Park Jihyo</h1>
            <p>General Manager</p>
          </div>
          <div className="team-image1-momo">
            <img src={momo} alt='' />
            <h1>Momo Hiraii</h1>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-image1-sana">
            <img src={sana} alt='' />
            <h1>Sana Minatozaki</h1>
            <p>Developer</p>
          </div>
        </div>
        <div className="product-team-image2">
          <div className="team-image2-walter">
              <img src={walter} alt='' />
              <div className="walter-text">
                <h1>Walter White</h1>
                <p>Business Manager</p>
              </div>
            </div>
            <div className="team-image2-jesse">
              <img src={jesse} alt='' />
              <div className="jesse-text">
                <h1>Jesse Pinkman</h1>
                <p>Support Staff</p>
              </div>
            </div>
            <div className="team-image2-jihyo">
              <img src={jihyo} alt='' />
              <div className="jihyo-text">
                <h1>Park Jihyo</h1>
                <p>Developer</p>
              </div>
            </div>
            <div className="team-image2-momo">
              <img src={momo} alt='' />
              <div className="momo-text">
                <h1>Momo Hiraii</h1>
                <p>Developer</p>
              </div>
            </div>
        </div>
      </div>

      <div className="product-blog">
        <div className="blog-text">
          <p>Our Blog</p>
          <h1>Value proposition accelerator product management venture</h1>
        </div>
        <div className="blog-details">
          <div className="blog-details-committed">
            <h1>We are <span>committed.</span></h1>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
          </div>
          <div className="blog-details-responsible">
            <h1>We are <span>responsible.</span></h1>
            <p>Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. 
              Return on investment seed round MVP backing supply chain. </p>
          </div>
          <div className="blog-details-progress">
            <h1>We aim for <span>progress.</span></h1>
            <p>Bootstrapping rockstar first mover advantage business model canvas alpha deployment 
              launch party beta facebook metrics gamification growth hacking customer focus.  </p>
          </div>
        </div>
      </div>
      <div className="product-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Product