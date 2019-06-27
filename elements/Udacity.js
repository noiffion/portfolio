import Carousel from 'nuka-carousel';
import Frame from '../frame/Frame';
import Footer from '../frame/Footer';


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
        <h2 className="folderProjectTitle"
            style={{color: 'hsl(194, 88%, 41%)'}}
        >Angkor Wat</h2>
        <ul className="features">
          <li>Vanilla JS</li> 
          <li>Knockout.js</li> 
          <li>APIs: Google Maps + Flickr </li> 
        </ul>
        <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
          <img src="./static/Angkor_0.png" />
          <img src="./static/Angkor_1.png" />
          <img src="./static/Angkor_2.png" />
        </Carousel>
        <div className="folderLinks">
          <a href="https://codepen.io/noiffion/project/full/XzobLE" target="_blank">
            <span className="projectLinks"> Demo @ CodePen </span>
          </a>
          <br />
          <a href="https://github.com/noiffion/angkor" target="_blank">
            <span className="projectLinks"> Source @ GitHub </span>
          </a>
        </div>
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle"
            style={{color: 'hsl(194, 88%, 41%)'}}
        >News database</h2>
        <ul className="features">
          <li>CLI</li> 
          <li>Python3</li> 
          <li>PostgreSQL</li> 
        </ul>
        <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
          <img src="./static/DB_0.png" />
          <img src="./static/DB_1.png" />
          <img src="./static/DB_2.png" />
          <img src="./static/DB_3.png" />
          <img src="./static/DB_4.png" />
          <img src="./static/DB_5.png" />
        </Carousel>
        <div className="folderLinks">
          <a href="https://github.com/noiffion/newsDB" target="_blank"> 
            <span className="projectLinks"> Source @ GitHub </span> 
          </a>
        </div> 
      </section>

      <section className="folderSection">
        <h2 className="folderProjectTitle"
            style={{color: 'hsl(194, 88%, 41%)'}}
        >Shakespeare plays</h2>
        <ul className="features">
          <li>Python3</li> 
          <li>Flask</li> 
          <li>Vanilla JS</li> 
          <li>SQLite</li> 
          <li>Facebook + Google login</li> 
        </ul>
        <Carousel className="folderCarousel" cellAlign="center" height="80vh" width="70vw"> 
          <img src="./static/Shaky_0.png" />
          <img src="./static/Shaky_1.png" />
          <img src="./static/Shaky_2.png" />
        </Carousel>
        <div className="folderLinks">
          <a href="https://github.com/noiffion/hamnet" target="_blank">
            <span className="projectLinks"> Source @ GitHub </span> 
          </a>
        </div>
      </section>

    </div>
  </Frame>
)


export default Udacity;
