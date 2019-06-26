import Carousel from 'nuka-carousel';
import Frame from '../frame/Frame';
import Footer from '../frame/Footer';

const Codecademy = props => (
  <div>
    <Frame>
      <div className="folderDiv">
        <h1 className="folderH1"> {props.title} projects </h1>
  
        <section className="folderSection">
          <h2 className="folderProjectTitle"> Savory &  House Store & Tsunami coffee </h2>
          <ul className="features">
            <li>plain HTML & CSS</li> 
          </ul>
          <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
            <img src="./static/Savory_0.png" />
            <img src="./static/Savory_1.png" />
            <img src="./static/House_0.png" />
            <img src="./static/House_1.png" />
            <img src="./static/House_2.png" />
            <img src="./static/House_3.png" />
            <img src="./static/House_4.png" />
            <img src="./static/Coffee_0.png" />
            <img src="./static/Coffee_1.png" />
            <img src="./static/Coffee_2.png" />
          </Carousel>
          <div className="folderLinks">
            <a href="https://codepen.io/noiffion/full/KjvydV" target="_blank">
              <span className="features"> Savory @ CodePen </span>
            </a><br/>
            <a href="https://codepen.io/noiffion/full/ZdJaqa" target="_blank">
              <span className="features"> House Store @ CodePen </span>
            </a><br/>
            <a href="https://codepen.io/noiffion/full/NZvXWp" target="_blank">
              <span className="features"> Tsunami coffee @ CodePen </span>
            </a>
          </div>
        </section>
  
        <section className="folderSection">
          <h2 className="folderProjectTitle"> Chore Door </h2>
          <ul className="features">
            <li>HTML</li> 
            <li>CSS</li> 
            <li>vanilla JS</li> 
          </ul>
          <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
            <img src="./static/Chore_0.png" />
            <img src="./static/Chore_1.png" />
            <img src="./static/Chore_2.png" />
          </Carousel>
          <div className="folderLinks">
            <a href="https://codepen.io/noiffion/full/LKjemE" target="_blank"> 
              <span className="features"> Demo @ CodePen </span> 
            </a>
          </div> 
        </section>
  
        <section className="folderSection">
          <h2 className="folderProjectTitle">  </h2>
          <ul className="features">
            <li></li> 
            <li></li> 
            <li></li> 
            <li></li> 
            <li></li> 
          </ul>
          <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
            <img src="" />
            <img src="" />
            <img src="" />
          </Carousel>
          <div className="folderLinks">
            <a href="" target="_blank">
              <span className="features"> Source @ GitHub </span> 
            </a>
          </div>
        </section>
  
      </div>
    </Frame>
    <Footer />
  </div>
)


export default Codecademy;
