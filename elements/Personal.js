import Frame from '../frame/Frame';
import Carousel from 'react-bootstrap/Carousel';


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
          <li></li>
        </ul>
        <Carousel className="folderCarousel">
          <Carousel.Item>
            <img src="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="" />
          </Carousel.Item>
        </Carousel>
        <div className="folderLinks">
          <a href="https://learn.freecodecamp.org" target="_blank">
            <span className="projectLinks"></span>
          </a>
        </div>
      </section>

    </div> 
  </Frame>
)


export default Personal;
