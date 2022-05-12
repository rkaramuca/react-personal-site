const Project = ({ url, location, alt, title, description }) => {
  console.log(location);

  return (
    <div className="project">
      <img src={ location } alt={ alt } />
      <div className="project-description">
        <h3>{ title }</h3>
        <p>{ description }</p>
        <a href={ url } target="_blank" rel="noopener noreferrer">Visit Project &gt;</a>
      </div>
    </div>
  );
}
 
export default Project;