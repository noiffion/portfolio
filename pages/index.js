import React, { useEffect } from 'react';
import PropTypes            from 'prop-types';
import Link                 from 'next/link';
import Frame                from '../frame/Frame';
import projectList          from '../elements/projectList';
import Articles             from '../elements/Articles';


const listMaker = list => {
  const lis = list.map((element, index) => {
    return (<li key={index+'_'+element}> {element} </li>)
  })
  return lis;
}




const ProjectFolder = props => (
  <article className="projectFolder">
    <Link href={`/folders?title=${props.title}`}>
      <div className="linkDiv">
        <h2 className="projectTitle" style={{color: props.color}} title="More info and live demo(s)">{props.title}</h2>
      </div>
    </Link>
    <p> {props.description} </p>
    <h5 style={{color: 'gray', fontStyle: 'italic'}}> {props.usedStack} </h5>
    <div className="techStack">
      <Link href={`/folders?title=${props.title}`}>
        <img className="folderImg" alt={props.alt} src={props.imgSrc} title="More info and live demo(s)"/>
      </Link>
      <ul>
          {listMaker(props.list)}
      </ul>
    </div>
    {props.dispCurr ?
      (<a href={props.link} style={{color: props.color}}target="_blank" rel="noopener noreferrer">
        {props.title} curriculum
       </a>) : null}
  </article>
);


const Index = () => {

  useEffect(() => {
    function scrollFunction() {
      const tesseract = document.getElementById('tesseract_img');
      const webProj = document.getElementById('webProj');
      const author = document.getElementById('author');
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        tesseract.className = tesseract.className.replace(/\btesseract_img_normal\b/g, 'tesseract_img_shrunk');
        author.style.display = 'none';
        webProj.className = webProj.className.replace(/\btitle_normal\b/g, 'title_shrunk');
      } else {
        tesseract.className = tesseract.className.replace(/\btesseract_img_shrunk\b/g, 'tesseract_img_normal');
        author.style.display = 'block';
        webProj.className = webProj.className.replace(/\btitle_shrunk\b/g, 'title_normal');
      }
    }
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, [])


  const folders = projectList.map((project, index) => {
       if (index !== 2) {
           return (
             <ProjectFolder
               key={index + '_' + project.title}
               title={project.title}
               color={project.color}
               imgSrc={project.imgSrc}
               description={project.description}
               usedStack={project.usedStack}
               list={project.list}
               link={project.link}
               alt={project.alt}
               dispCurr={project.displayCurriculum}
             /> );
       } else {
          const headerStyle = {
            textAlign: 'center',
            borderTop: '1px solid #000000',
            borderBottom: '1px solid #000000',
            borderRadius: '10px',
            padding: '1%',
            margin: '2% 0 5% 0',
          }
          return (
           <>
             <h1 style={headerStyle}>{project.title}</h1> 
           </> 
          );
       }
  });


  return (
    <Frame>
      <div className="projectGrid">
        {folders}
        <Articles />
      </div>
    </Frame>
  );
}


ProjectFolder.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}


export default Index;
