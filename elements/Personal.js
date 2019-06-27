import Frame from '../frame/Frame';
import Footer from '../frame/Footer';
import Carousel from 'nuka-carousel';


const Personal = props => (
  <div>
    <Frame>
      <div className="folderDiv">
        <div className="folderTitle"
             style={{color: 'hsl(0, 100%, 99%)',
             background: 'linear-gradient(45deg, hsl(324, 7%, 18%), hsl(324, 7%, 10%))'}}
        >
          <h1 > {props.title} projects </h1>
        </div>
  
         <section className="folderSection">
          <h2 className="folderProjectTitle"
              style={{color: 'hsl(324, 7%, 14%)'}}
          ></h2>
          <ul className="features">
            <li></li>
          </ul>
          <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw">
            <img src="" />
          </Carousel>
          <div className="folderLinks">
            <a href="https://learn.freecodecamp.org" target="_blank">
              <span className="projectLinks"></span>
            </a>
          </div>
        </section>

      </div> 
    </Frame>
    <Footer />
  </div>
)


export default Personal;
