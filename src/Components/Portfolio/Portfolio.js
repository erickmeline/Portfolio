import React from "react";
import { Link } from "react-router-dom";

function Portfolio(props) {
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
                                <div className="card col-lg-6 col-sm-12">
                                    <div className="card-header">
                                        Employee Directory
                                    </div>
                                    <div className="image">
                                        <img src="https://github.com/erickmeline/Employee-Directory/raw/main/public/images/screenshot.png" className="card-img-top" alt="Emomii" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">An employee directory built in React that allows both sorting and filtering of the employees by name.</p>
                                        <a href="https://github.com/erickmeline/Employee-Directory" className="btn btn-primary">See it on Github</a>
                                    </div>
                                </div>
                                <div className="card col-lg-6 col-sm-12">
                                    <div className="card-header">
                                        Clicky
                                    </div>
                                    <div className="image">
                                        <img src="https://github.com/erickmeline/Clicky/raw/master/public/images/screenshot.png" className="card-img-top" alt="Clicky" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Clicky is a fun little memory game built with React with a Rick and Morty theme. Awesome.</p>
                                        <a href="https://github.com/erickmeline/Clicky" className="btn btn-primary">See it on Github</a>
                                    </div>
                                </div>
                                <div className="card col-lg-6 col-sm-12">
                                    <div className="card-header">
                                        Emomii
                                    </div>
                                    <div className="image">
                                        <img src="https://raw.githubusercontent.com/erickmeline/Project2/main/screenshot2.png" className="card-img-top" alt="Emomii" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">A daily mood tracker to identify patterns that can point towards emotionally intelligence.</p>
                                        <a href="https://github.com/erickmeline/Project2" className="btn btn-primary">See it on Github</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-group col-12">
                                <div className="card col-lg-4 col-sm-12">
                                    <div className="card-header">
                                        Workout-Tracker
                                    </div>
                                    <div className="image">
                                        <img src="https://github.com/erickmeline/Workout-Tracker/raw/main/public/images/screenshot.png" className="card-img-top" alt="Emomii" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Workout tracker allows creation of workout plans with various exercises and charts over time.</p>
                                        <a href="https://github.com/erickmeline/Workout-Tracker" className="btn btn-primary">See it on Github</a>
                                    </div>
                                </div>
                                <div className="card col-lg-4 col-sm-12">
                                    <div className="card-header">
                                        Readme Generator
                                    </div>
                                    <div className="image">
                                        <img src="https://github.com/erickmeline/Readme-Generator/raw/master/assets/images/screenshot.png" className="card-img-top" alt="Emomii" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">A Node.js app that accepts input about a github project, and generates a polished readme.</p>
                                        <a href="https://github.com/erickmeline/Readme-Generator" className="btn btn-primary">See it on Github</a>
                                    </div>
                                </div>
                                <div className="card col-lg-4 col-sm-12">
                                    <div className="card-header">
                                        Book Search
                                    </div>
                                    <div className="image">
                                        <img src="https://github.com/erickmeline/Google-Books-Search/raw/main/client/public/screenshot.png" className="card-img-top" alt="Emomii" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">A React.js app that searches Google Books, and saves favorites for future purchase.</p>
                                        <a href="https://github.com/erickmeline/Google-Books-Search" className="btn btn-primary">See it on Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Portfolio;
