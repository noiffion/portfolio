import React     from 'react';
import PropTypes from 'prop-types';
import Frame     from '../frame/Frame';
import Carousel  from 'react-bootstrap/Carousel';


const Personal = props => (
  <Frame>
    <div className="folderDiv">
      <div className="folderTitle"
           style={{color: 'hsl(0, 100%, 99%)',
           background: 'linear-gradient(45deg, hsl(324, 7%, 18%), hsl(324, 7%, 10%))'}}
      >
        <h1 > {props.title} projects </h1>
      </div>

       <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(324, 7%, 14%)'}}>
          Issue Tracker
        </h2>
        <ul className="features">
          <li>MongoDb</li>
          <li>Express.js</li>
          <li>React</li>
          <li>Node</li>
          <li>Webpack</li>
        </ul>
        <Carousel className="folderCarousel">
          <Carousel.Item>
            <img src="./static/Itracker_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Itracker_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Itracker_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Itracker_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Itracker_4.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Itracker_5.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Itracker_6.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://noiffion-issue-tracker.glitch.me/" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Issue Tracker</span>
          </a> @ Glitch
        </div>
      </section>


       <section className="folderSection">
        <h2 className="folderProjectTitle" style={{color: 'hsl(324, 7%, 14%)'}}>
          Sorters
        </h2>
        <ul className="features">
          <li>Next.js</li>
          <li>Webworkers</li>
          <li>Styled components</li>
          <li>React VirtualList</li>
          <li>Eslint + Jest</li>
        </ul>
        <Carousel className="folderCarousel">
          <Carousel.Item>
            <img src="./static/Sorter_0.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Sorter_1.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Sorter_2.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Sorter_3.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Sorter_4.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="./static/Sorter_5.png" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://blooming-waters-25635.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Sorters</span>
          </a>
        </div>
      </section>

    </div> 
  </Frame>
)


Personal.propTypes = {
  title: PropTypes.string.isRequired, 
}


export default Personal;
