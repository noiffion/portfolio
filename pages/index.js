import Link from 'next/link';
import Frame from '../frame/Frame';
import Footer from '../frame/Footer';
import projectList from '../elements/projectList';
import Articles from '../elements/Articles';


const ProjectLink = props => (
  <article className={props.cls}>
    <Link href={`/folders?title=${props.title}`}>
      <a href={props.title}>
        <h2 style={{color: props.color}}>{props.title}</h2>
        <img alt={props.alt} src={props.imgSrc} />
      </a>
    </Link>
    <p> {props.description} </p>
  </article>
);


const Index = props => {
  const folders = projectList.map((project, index) => (
    <ProjectLink key={index + '_' + project.title} cls={project.cls} title={project.title} 
                 color={project.color} imgSrc={project.imgSrc} description={project.description} 
                 alt={project.alt} 
    />
  ));


  return (
    <div>
      <Frame>
        <div className="projectGrid">
          {folders}
        </div>
      </Frame>
      <Articles /> 
      <Footer />
    </div>
  );
}


export default Index;
