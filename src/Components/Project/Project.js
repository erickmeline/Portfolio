import React from "react";

function Project(props) {
  const { project } = props;
  return (
    <div className="card col-lg-6 col-sm-12">
        <div className="card-header">
            {project.title}
        </div>
        <div className="image">
            <a href={project.link} title="view demo"><img src={project.image} className="card-img-top" alt={project.title} /></a>
        </div>
        <div className="card-body">
            <p className="card-text">{project.description}</p>
            <a href={project.github} className="btn btn-primary">See it on Github</a>
        </div>
    </div>
    );
}

export default Project;
