import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <section className="about">
        <div className="container">
            <h3>Introduction</h3>
            <hr />
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src="assets/images/me.jpeg" alt="Erick Meline" />
                </div>
                <div className="col-lg-6 col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">About me</h4>
                            <p>
                                I'm a creative problem-solver with a versatile and diverse skill set as a Web Developer with an eye for design. Drawing on a breadth of coding and software development experience, I seek to outperform and build on innovation, utilizing both creativity and programming expertise. I hold professional certificates in Full Stack Web Development from the University of California Berkeley, and Front-end Application Development from Codecademy. I enjoy bringing creativity and technical skills to a company where I can grow and become a valuable asset.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card small col-lg-4 col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Linkedin</h6>
                                <small className="card-text"><a href="https://www.linkedin.com/in/erick-meline/">/erick-meline/</a></small>
                            </div>
                        </div>
                        <div className="card small col-lg-4 col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Phone</h6>
                                <small className="card-text"><a href="tel://925-451-1168">925 451 1168</a></small>
                            </div>
                        </div>
                        <div className="card small col-lg-4 col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Email</h6>
                                <small className="card-text"><a href="mailto://erickmeline@gmail.com">erickmeline@gmail.com</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;
