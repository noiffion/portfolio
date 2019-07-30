import React        from 'react';
import PropTypes    from 'prop-types';
import sidebarIcons from './sidebarIcons';


const Icon = props => (
  <div className="docsource">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
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


Icon.propTypes = {
  url: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  focused: PropTypes.string.isRequired,
  mouseOut: PropTypes.func.isRequired,
  mouseOver: PropTypes.func.isRequired, 
}

Sidebar.propTypes = {
  mouseOut: PropTypes.func.isRequired,
  mouseOver: PropTypes.func.isRequired, 
}


export default Sidebar;
