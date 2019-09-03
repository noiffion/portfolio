import React     from 'react';
import Frame     from '../frame/Frame';
import Carousel  from 'react-bootstrap/Carousel';


const description = ` A web app demonstrating how concurrency is possibile with webworkers:
 various sorting algorithms are competing at the same time to sort a copy of the same array 
 (also created by a worker). When each of the algorithms has finished the time it took to sort 
 the array displayed and the sorting algorithms themselves are sorted in order of efficiency. 
 More details in the GitHub repo (please, click on the link at the bottom of the page).`;

const Sorters = () => (
  <Frame>
    <div className="folderDiv manjari">
      <div className="folderTitle"
           style={{color: 'hsl(0, 100%, 99%)',
           background: 'linear-gradient(45deg, hsl(38, 98%, 52%), hsl(38, 98%, 50%))',
           fontFamily: 'Work Sans',}}
      >
        <h1>Sorter efficiency comparison</h1>
      </div>

       <section className="folderSection">
        <a href="https://blooming-waters-25635.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <h2 title="Live demo at heroku" className="folderProjectTitle" style={{color: 'hsl(38, 98%, 52%)'}}>
            Sorters
          </h2>
        </a>
        <p className="manjari" style={{margin: '2% 2%'}}>{description}</p>
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
        <div className="folderLinks manjari">
          <a href="https://blooming-waters-25635.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Sorters @ Heroku</span>
          </a><br/>
          <a href="https://github.com/noiffion/Sorters" target="_blank" rel="noopener noreferrer">    
            <span className="projectLinks"> Source @ GitHub </span>    
          </a>
        </div>
      </section>

    </div> 
  </Frame>
)


export default Sorters;
