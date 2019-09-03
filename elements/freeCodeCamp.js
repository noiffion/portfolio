import React     from 'react';
import PropTypes from 'prop-types';
import Carousel  from 'react-bootstrap/Carousel';
import Frame     from '../frame/Frame';


const FreeCodeCamp = props => (
  <Frame>
    <div className="folderDiv manjari">
      <div className="folderTitle" 
           style={{color: 'hsl(0, 100%, 99%)', 
           background: 'linear-gradient(45deg, hsl(120, 33%, 45%), hsl(120, 33%, 37%))',
           fontFamily: 'Work Sans'}}
      >
        <h1>freeCodeCamp projects</h1>
      </div>

       <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(120, 43%, 41%)'}}> 
          Responsive web pages 
        </h2>
        <ul className="features">
          <li>HTML5 & CSS3</li> 
          <li>CSS Flexbox</li> 
          <li>CSS Grid</li> 
          <li>Applied visual design and accessibility</li> 
          <li>Responsive web design principles</li> 
          <li>Five projects passing more than 70 tests</li> 
        </ul>
        <Carousel className="folderCarousel">
          <Carousel.Item>
            <img src="./static/Responsive_0.png" /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Responsive_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Responsive_2.png" /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Responsive_3.png" /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Responsive_4.png" /> 
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://learn.freecodecamp.org" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Infos @ freeCodeCamp</span> 
          </a>
        </div>
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(120, 43%, 41%)'}}> 
          Javascript data structures 
        </h2>
        <ul className="features">
          <li>ES6</li> 
          <li>RegExp</li> 
          <li>Data Structures and Algorithms</li> 
          <li>OO and Functional programming</li> 
          <li>Five coding projects and dozens of exercises</li> 
        </ul>
        <Carousel className="folderCarousel">
          <Carousel.Item>
            <img src="./static/fCC-JS_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/fCC-JS_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/fCC-JS_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/fCC-JS_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/fCC-JS_4.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://learn.freecodecamp.org" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks"> Infos @ freeCodeCamp </span>
          </a>
        </div>
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(120, 43%, 41%)'}}> 
          Front End libraries 
        </h2>
        <ul className="features">
          <li>Bootstrap</li> 
          <li>jQuery</li> 
          <li>Sass</li> 
          <li>React</li> 
          <li>Redux</li> 
          <li>Five projects</li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>
            <img src="./static/FrontEndLib_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/FrontEndLib_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/FrontEndLib_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/FrontEndLib_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/FrontEndLib_4.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://codepen.io/noiffion/pen/gJKWYm" target="_blank" rel="noopener noreferrer">
             <span style={{color: 'hsl(0, 0%, 70%)'}}>&#91;</span>
             <span className="projectLinks">Quotes</span>
             <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://codepen.io/noiffion/pen/mYKXOm" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Markdown</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://codepen.io/noiffion/pen/EzpKBP" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Drums</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://codepen.io/noiffion/pen/dEjERo" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Calculator</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://codepen.io/noiffion/pen/qGMdpB" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Pomodoro</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>&#93;{' '}</span>
          </a>@ Codepen
        </div>
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(120, 43%, 41%)'}}> 
          APIs and Microservices 
        </h2>
        <ul className="features">
          <li>Node and Express</li> 
          <li>npm - yarn package management</li> 
          <li>MongoDB</li> 
          <li>Five projects</li> 
        </ul>
        <Carousel className="folderCarousel"> 
          <Carousel.Item>
            <img src="./static/API_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/API_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/API_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/API_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/API_4.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://glitch.com/edit/#!/freecodecamp-api-1?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
             <span style={{color: 'hsl(0, 0%, 70%)'}}>&#91;</span>
             <span className="projectLinks">Timestamp</span>
             <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/freecodecamp-api-2?path=server.js:3:0" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Header&nbsp;Parser</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/freecodecamp-api-3?path=server.js:3:33" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">URL&nbsp;Shortener</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/freecodecamp-api-4?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Exercise&nbsp;tracker</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/freecodecamp-api-5?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">File&nbsp;Metadata</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>&#93;{' '}</span>
          </a>@ Glitch 
        </div>
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(120, 43%, 41%)'}}> 
          Quality Assurance 
        </h2>
        <ul className="features">
          <li>HelmetJS</li> 
          <li>Functional and unit testing {"with"} Mocha and Chai</li> 
          <li>Advanced Node and Express</li> 
          <li>MongoDB</li> 
          <li>IEX Cloud API</li> 
          <li>Five projects</li> 
        </ul>
        <Carousel className="folderCarousel">
          <Carousel.Item>
            <img src="./static/ISQA_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/ISQA_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/ISQA_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/ISQA_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/ISQA_4.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://glitch.com/edit/#!/infosec-qualit-assurance-project1?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
             <span style={{color: 'hsl(0, 0%, 70%)'}}>&#91;</span>
             <span className="projectLinks">Converter</span>
             <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/fcc-isqa-4?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Issues</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/fcc-isqa-iii?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Library</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/fcc-isqa-iv?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Nasdaq</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>,{' '}</span>
          </a>
          <a href="https://glitch.com/edit/#!/fcc-isqa-v?path=server.js:1:0" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Message&nbsp;Board</span>
            <span style={{color: 'hsl(0, 0%, 70%)'}}>&#93;{' '}</span>
          </a>@ Glitch 
        </div>
      </section>

    </div>
  </Frame>
)


export default FreeCodeCamp;
