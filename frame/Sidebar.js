import Link from 'next/link';
import sidebarIcons from './sidebarIcons';


const Icon = props => (
  <div className="docsource">
    <a href={props.url} target="_blank">
      <img alt={props.name} src={props.path} data-normal={props.path} data-focused={props.focused}
        onMouseOver={props.mouseOver} onMouseOut={props.mouseOut} />
    </a>
    <h3>{props.name}</h3>
  </div>
);


const Sidebar = props => {
  const icons = sidebarIcons.map((icon, index) => (
    <Icon key={index + '_' + icon.name} name={icon.name} url={icon.url} path={icon.path}
          focused={icon.focused} mouseOver={props.mouseOver} mouseOut={props.mouseOut} />
  ));

  return (
    <aside className="sidebar">
      {icons}
    </aside>
  )
};


export default Sidebar;
