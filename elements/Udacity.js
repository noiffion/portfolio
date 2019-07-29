
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Frame from '../frame/Frame';


const Udacity = props => (
  <Frame>
    <div className="folderDiv">
      <div className="folderTitle"
           style={{color: 'hsl(0, 100%, 99%)',
           background: 'linear-gradient(45deg, hsl(194, 88%, 50%), hsl(194, 88%, 44%))'}}
      >
        <h1 > {props.title} projects </h1>
      </div>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(194, 88%, 41%)'}}>
          Angkor Wat
        </h2>
        <ul className="features">
          <li>Vanilla JS</li> 
          <li>Knockout.js</li> 
          <li>APIs: Google Maps + Flickr </li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>
            <img src="./static/Angkor_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Angkor_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Angkor_2.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://angkor-wat.glitch.me" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Demo @ Glitch </span>
          </a>
          <br />
          <a href="https://github.com/noiffion/angkor" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Source @ GitHub </span>
          </a>
        </div>
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(194, 88%, 41%)'}}> 
          News database
        </h2>
        <ul className="features">
          <li>CLI</li> 
          <li>Python3</li> 
          <li>PostgreSQL</li> 
        </ul>
        <Carousel className="folderCarousel" > 
          <Carousel.Item>
            <img src="./static/DB_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/DB_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/DB_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/DB_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/DB_4.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/DB_5.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://github.com/noiffion/newsDB" target="_blank" rel="noopener noreferrer"> 
            <span className="projectLinks"> Source @ GitHub </span> 
          </a>
        </div> 
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(194, 88%, 41%)'}}>
          Shakespeare plays
        </h2>
        <ul className="features">
          <li>Python3</li> 
          <li>Flask</li> 
          <li>Vanilla JS</li> 
          <li>SQLite</li> 
          <li>Facebook</li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>
            <img src="./static/Shaky_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Shaky_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Shaky_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Shaky_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Shaky_4.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Shaky_5.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://github.com/noiffion/hamnet" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Source @ GitHub </span> 
          </a>
          <br />
          <a href="https://noiffion.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Demo @ Pythonanywhere </span>
          </a>
        </div>
      </section>

    </div>
  </Frame>
)


Udacity.propTypes = {
  title: PropTypes.string.isRequired, 
}


export default Udacity;
