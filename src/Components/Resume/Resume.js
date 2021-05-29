import React from "react";

function Resume(props) {
  return (
    <section className="resume">
        <div className="container">
            <h3>Resume</h3>
            <hr />
            <div className="row">
                <div className="card col-12">
                    <div className="card-body">
                        <h4>Objective</h4>
                        <small><a href="https://github.com/erickmeline/Erick_Meline/raw/main/Resume-Erick-Meline.pdf">download</a></small>
						<p>To outperform and build on innovation utilizing both creative design and programing expertise.</p>
						<h5>Employment Skills</h5>
						<ul>
						<li>Expert level knowledge of HTML, CSS &amp; Web development</li>
						<li>Web application development and customization</li>
						<li>Website user interface design and ability to code for cross browser compatibility</li>
						<li>HTML5, CSS3, JavaScript, jQuery, AJAX, JSTL/JSP, XML, Perl, Unix</li>
						<li>Website search engine optimization</li>
						<li>Strong corporate graphic design creative skills including typography, color, and layout</li>
						<li>Skilled with many design &amp; production software applications (AA, AI, FH, PM, PS, QX, etc.)</li>
						<li>Print production and digital pre-press document preparation &amp; troubleshooting</li>
						</ul>
						<h5>Personal Highlights</h5>
						<ul>
						<li>Detail oriented</li>
						<li>Quick learner</li>
						<li>Professional work ethic</li>
						<li>Self motivated</li>
						<li>Write clearly</li>
						<li>Deadline driven</li>
						</ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Resume;
