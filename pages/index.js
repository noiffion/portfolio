import Link from 'next/link';
import Frame from '../frame/Frame';
import projectList from '../elements/projectList';
import Articles from '../elements/Articles';


const listMaker = list => {
  const lis = list.map(element => {
    return (<li> {element} </li>)
  })
  return lis;
}


const ProjectFolder = props => (
  <article className="projectFolder">
    <Link href={`/folders?title=${props.title}`}>
      <a href={props.title}>
        <h2 style={{color: props.color}}>{props.title}</h2>
        <img alt={props.alt} src={props.imgSrc} />
      </a>
    </Link>
    <p> {props.description} </p>
    <ul>
        {listMaker(props.list)}
    </ul>
    {props.title !== 'Personal' ? 
      (<a href={props.link} style={{color: props.color}}target="_blank"> 
        {props.title} curriculum 
       </a>) : null}
  </article>
);


const Index = props => {
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


export default Index;
