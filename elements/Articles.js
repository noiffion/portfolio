import React from 'react';


const Articles = () => (
  <section className="infosources">
    <h2 id="webDev_articles">Web development articles</h2>
    <div className="gallery">
      <div className="webdev">
        <a href="https://dassur.ma/things/when-workers/" target="_blank" rel="noopener noreferrer">
        <img alt="Web worker diagram" src="./static/ww.png" />
        <h3>Async</h3>
        <h4>Web Workers</h4>
        </a>
      </div>
      <div className="webdev">
        <a href="https://medium.com/@amberleyjohanna/seriously-though-what-is-a-progressive-web-app-56130600a093" target="_blank" rel="noopener noreferrer">
        <img alt="Progressive Web App logo" src="./static/pwa.png" />
        <h3>PWA</h3>
        <h4>Progressive Web Apps</h4>
        </a>
      </div>
      <div className="webdev">
        <a href="https://hackernoon.com/forget-docker-the-future-is-jamstack-aae5bcaf4616" target="_blank" rel="noopener noreferrer">
        <img alt="JAMstack logo" src="./static/JAMstack.png" />
        <h3>JAMStack</h3>
        <h4>Serverless</h4>
        </a>
      </div>
    </div>
  </section>
);


export default Articles;
