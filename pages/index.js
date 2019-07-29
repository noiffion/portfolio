import React       from 'react';
import PropTypes   from 'prop-types';
import Link        from 'next/link';
import Frame       from '../frame/Frame';
import projectList from '../elements/projectList';
import Articles    from '../elements/Articles';


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
        <h2 style={{color: props.color}}>{props.title}</h2>
        <img className="folderImg" alt={props.alt} src={props.imgSrc} />
      </div>
    </Link>
    <p> {props.description} </p>
    <ul>
        {listMaker(props.list)}
    </ul>
    {props.title !== 'Personal' ? 
      (<a href={props.link} style={{color: props.color}}target="_blank" rel="noopener noreferrer"> 
        {props.title} curriculum 
       </a>) : null}
  </article>
);


const Index = () => {
  const folders = projectList.map((project, index) => (
    <ProjectFolder 
      key={index + '_' + project.title}
      title={project.title}
      color={project.color}
      imgSrc={project.imgSrc}
      description={project.description}
      list={project.list}
      link={project.link}
      alt={project.alt}
    />
  ));


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
