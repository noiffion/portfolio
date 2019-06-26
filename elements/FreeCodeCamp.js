import Frame from '../frame/Frame';
import Footer from '../frame/Footer';


const FreeCodeCamp = props => (
  <div>
    <Frame>
      <div style={{border: '1px solid black'}}>
        <h1 style={{color: 'SteelBlue'}}>{props.title} projects </h1>
  
        <article>
          <h2></h2>
          <ul>
            <li></li> 
            <li></li> 
            <li></li> 
          </ul>
        </article>
  
        <article>
          <h2></h2>
          <ul>
            <li></li> 
            <li></li> 
            <li></li> 
          </ul>
        </article>
  
        <article>
          <h2></h2>
          <ul>
            <li></li> 
            <li></li> 
            <li></li> 
            <li></li> 
            <li></li> 
          </ul>
        </article>
  
      </div>
    </Frame>
    <Footer />
  </div>
)


export default FreeCodeCamp;
