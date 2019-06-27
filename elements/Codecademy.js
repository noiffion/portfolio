import Carousel from 'nuka-carousel';
import Frame from '../frame/Frame';
import Footer from '../frame/Footer';


const Codecademy = props => (
  <div>
    <Frame>
      <div className="folderDiv">
        <div className="folderTitle">
          <h1> {props.title} projects </h1>
        </div>
  
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
            <li>HTML + CSS + JS</li> 
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
          <h2 className="folderProjectTitle"> Shoes </h2>
          <ul className="features">
            <li>HTML + CSS</li> 
            <li>jQuery</li> 
          </ul>
          <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
            <img src="./static/Shoes_0.png" />
            <img src="./static/Shoes_1.png" />
          </Carousel>
          <div className="folderLinks">
            <a href="https://shoes-noiffion.glitch.me/" target="_blank">
              <span className="features"> Demo @ Glitch </span> 
            </a>
          </div>
        </section> 

        <section className="folderSection">
          <h2 className="folderProjectTitle"> Wanderlust </h2>
          <ul className="features">
            <li>vanilla JS</li> 
            <li>jQuery</li> 
            <li>Async - Await + Promises</li> 
            <li>APIs: Foursquare + Apixu </li> 
          </ul>
          <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
            <img src="./static/Wander_0.png" />
            <img src="./static/Wander_1.png" />
            <img src="./static/Wander_2.png" />
          </Carousel>
          <div className="folderLinks">
            <a href="https://wanderlust-noiffion.glitch.me/" target="_blank">
              <span className="features"> Demo @ Glitch </span> 
            </a><br/>
            <a href="https://github.com/noiffion/Wanderlust" target="_blank">
              <span className="features"> Source @ GitHub </span> 
            </a><br/>
          </div>
        </section>

        <section className="folderSection">
          <h2 className="folderProjectTitle"> Ravenous </h2>
          <ul className="features">
            <li>React</li> 
          </ul>
          <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
            <img src="./static/Ravenous_0.png" />
            <img src="./static/Ravenous_1.png" />
          </Carousel>
          <div className="folderLinks">
            <a href="https://codesandbox.io/s/quizzical-joliot-iy6mx" target="_blank">
              <span className="features"> Demo @ CodeSandbox </span> 
            </a><br/>
          </div>
        </section>
  
      </div>
    </Frame>
    <Footer />
  </div>
)


export default Codecademy;
