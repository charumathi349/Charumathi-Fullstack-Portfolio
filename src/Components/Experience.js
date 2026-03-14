import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import '../Components/Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skillsets</h2>

      <div className="container experience_container">
        {/* Design & Prototyping Tools */}
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>

        {/* UX Design Skills */}
        <div className="experience_frontend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>REST API Development</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>

        {/* Visual & Graphic Skills */}
        <div className="experience_frontend">
          <h3>Database & Data Management</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Database Design</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>CRUD Operations</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Development Tools</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Git & GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Proficient</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>IntelliJ IDEA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Eclipse</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="icon" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;