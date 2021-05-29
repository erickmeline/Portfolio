import React from "react";
import Project from "../../Components/Project";
import projects from "../../Components/Project/projects.json";

class Portfolio extends React.Component {
  state = {
    projects: projects
  };
  render() {
      const { projects } = this.state;
      const p1 = projects.slice(0, 3);
      const p2 = projects.slice(3, 6);
        return (
            <section className="portfolio">
                <div className="container">
                    <h3>Portfolio</h3>
                    <hr />
                    <div className="row">
                        <div className="card col-12">
                            <div className="card-body">
                                <h4>Recent Projects</h4>
                                <div className="row">
                                    <div className="card-group col-12">
                                        { p1.map(project => (
                                            <Project key={project.id} project={project} />
                                        ))}
                                    </div>
                                    <div className="card-group col-12">
                                        { p2.map(project => (
                                            <Project key={project.id} project={project} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
