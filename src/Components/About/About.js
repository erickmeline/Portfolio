import React from "react";

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
                                Drawing on front-end coding experience, in-depth knowledge of Javascript and React concepts, I seek to outperform and build on innovation, utilizing both creativity and programming expertise. Responsive web-based applications that delight users and operate efficiently in large-scale environments is my jam.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card small col-lg-4 col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Location</h6>
                                <small className="card-text">Walnut Creek, CA</small>
                            </div>
                        </div>
                        <div className="card small col-lg-4 col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Phone</h6>
                                <small className="card-text">925 451 1168</small>
                            </div>
                        </div>
                        <div className="card small col-lg-4 col-sm-12">
                            <div className="card-body">
                                <h6 className="card-title">Email</h6>
                                <small className="card-text">erickmeline@gmail.com</small>
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
