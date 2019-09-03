import React     from 'react';
import Frame     from '../frame/Frame';
import Carousel  from 'react-bootstrap/Carousel';


const description = `An issue tracker application: issues can be recorded (their name, severity in
 a 1-10 scale, the date where they were discovered and closed, who is responsible for them, and a short
 description of them. After sign-in with a GitHub account the new issues can be recorded, existing ones
 can be deleted, and they can be filtered.`


const IssueTracker = () => (
  <Frame>
    <div className="folderDiv manjari">
      <div className="folderTitle"
           style={{color: 'hsl(0, 100%, 99%)',
           background: 'linear-gradient(45deg, hsl(219, 18%, 51%), hsl(219, 28%, 51%))',
           fontFamily: 'Work Sans'}}
      >
        <h1>IssueTracker</h1>
      </div>

       <section className="folderSection">
       <a href="https://noiffion-issue-tracker.glitch.me/" target="_blank" rel="noopener noreferrer">
        <h2 title="Live demo at Glitch" className="folderProjectTitle" style={{color: 'hsl(219, 18%, 51%)'}}>
          Issue Tracker
        </h2>
       </a>
       <p className="manjari" style={{margin: '2% 2%'}}>{description}</p>
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
        <div className="folderLinks manjari">
          <a href="https://noiffion-issue-tracker.glitch.me/" target="_blank" rel="noopener noreferrer">
            <span className="projectLinks">Issue Tracker @ Glitch</span>
          </a><br/>
          <a href="https://github.com/noiffion/Itracker" target="_blank" rel="noopener noreferrer">    
            <span className="projectLinks"> Source @ GitHub </span>    
          </a> 
        </div>
      </section>

    </div> 
  </Frame>
)


export default IssueTracker;
