import React     from 'react';
import Frame     from '../frame/Frame';
import PropTypes from 'prop-types';
import Carousel  from 'react-bootstrap/Carousel';


const Codecademy = props => (
  <Frame>
    <div className="folderDiv">
      <div className="folderTitle" 
           style={{color: 'hsl(0, 100%, 99%)', 
           background: 'linear-gradient(45deg, hsl(202, 21%, 35%), hsl(202, 21%, 29%))'}}
      >
        <h1 > {props.title} projects </h1>
      </div>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(202, 21%, 32%)'}}>
          Savory &  House Store & Tsunami coffee
        </h2>
        <ul className="features">
          <li>plain HTML & CSS</li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>    
            <img src="./static/Savory_0.png" />
          </Carousel.Item>  
          <Carousel.Item>    
            <img src="./static/Savory_1.png" />
          </Carousel.Item>  
          <Carousel.Item>    
            <img src="./static/House_0.png" />
          </Carousel.Item>  
          <Carousel.Item>    
            <img src="./static/House_1.png" />
          </Carousel.Item>  
          <Carousel.Item>    
            <img src="./static/House_2.png" />
          </Carousel.Item>  
          <Carousel.Item>    
            <img src="./static/House_3.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/House_3.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/House_4.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/Coffee_0.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/Coffee_1.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/Coffee_2.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://codepen.io/noiffion/full/KjvydV" target="_blank" rel="noopener noreferrer">
             <span style={{color: 'hsl(0, 0%, 70%)'}}>&#91;</span>
             <span className="projectLinks">Savory</span>
             <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://codepen.io/noiffion/full/ZdJaqa" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">House Store</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://codepen.io/noiffion/full/NZvXWp" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Tsunami coffee</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>&#93;{' '}</span>
          </a>@ Codepen
        </div>

      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(202, 21%, 32%)'}}> 
          Chore Door
        </h2>
        <ul className="features">
          <li>HTML + CSS + JS</li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>    
            <img src="./static/Chore_0.png" />
          </Carousel.Item>  
          <Carousel.Item>    
            <img src="./static/Chore_1.png" />
          </Carousel.Item>  
          <Carousel.Item>    
            <img src="./static/Chore_2.png" />
          </Carousel.Item>  
        </Carousel>
        <div className="folderLinks">
          <a href="https://codepen.io/noiffion/full/LKjemE" target="_blank" rel="noopener noreferrer"> 
            <span className="projectLinks"> Demo @ CodePen </span> 
          </a>
        </div> 
      </section>

       <section className="folderSection">
        <h2 className="folderProjectTitle"
            style={{color: 'hsl(202, 21%, 32%)'}}
        >Shoes</h2>
        <ul className="features">
          <li>HTML + CSS</li> 
          <li>jQuery</li> 
        </ul>
        <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
          <img src="./static/Shoes_0.png" />
          <img src="./static/Shoes_1.png" />
        </Carousel>
        <div className="folderLinks">
          <a href="https://shoes-noiffion.glitch.me/" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Demo @ Glitch </span> 
          </a>
        </div>
      </section> 

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(202, 21%, 32%)'}}>
          Wanderlust
        </h2>
        <ul className="features">
          <li>vanilla JS</li> 
          <li>jQuery</li> 
          <li>Node + Express</li> 
          <li>Async - Await + Promises</li> 
          <li>APIs: Foursquare + Apixu </li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>    
            <img src="./static/Wander_0.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/Wander_1.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/Wander_2.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://wanderlust-noiffion.glitch.me/" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Demo @ Glitch </span> 
          </a><br/>
          <a href="https://github.com/noiffion/Wanderlust" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Source @ GitHub </span> 
          </a><br/>
        </div>
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(202, 21%, 32%)'}}> 
          Ravenous
        </h2>
        <ul className="features">
          <li>React</li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>    
            <img src="./static/Ravenous_0.png" />
          </Carousel.Item>
          <Carousel.Item>    
            <img src="./static/Ravenous_1.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://codesandbox.io/s/quizzical-joliot-iy6mx" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Demo @ CodeSandbox </span> 
          </a><br/>
        </div>
      </section>

    </div>
  </Frame>
)


Codecademy.propTypes = {
  title: PropTypes.string.isRequired, 
}


export default Codecademy;
