import React from 'react';
import Header from './header.jsx';

/* eslint-disable */
const cssClasses = 'form-row clearfix';
/* eslint-enable*/

const AddProj = (props) => {
  const { changeView, projChange, createProject } = props;

  return (
    <div>
      <Header changeView={changeView} />
      <section id="main">
        <div className="container">
          <div className="content">
            <h2>Create Project</h2>
            <div id="create-project">
              <div className="form-row clearfix">
                <div className="input-half project-title">
                  <label htmlFor="project-name">Project Title</label>
                  <input
                    type="text"
                    id="project-name"
                    name="project-name"
                    onChange={(e) => { projChange(e); }}
                  />
                </div>
                <div className="input-half project-select">
                  <label htmlFor="project-name">Add Team Members</label>
                  <select
                    name="team-select"
                    id="team-select"
                    placeholder="Type to find your teammate"
                    multiple="multiple"
                  />
                </div>
              </div>
              <div className="input-full project-summary">
                <label htmlFor="project-summary">Summarize Your Project</label>
                <textarea
                  id="project-summary"
                  onChange={(e) => { projChange(e); }}
                />
              </div>
              <div className="clearfix">
                <button
                  type="submit"
                  id="project-submit"
                  onClick={() => { createProject(); }}
                >
                Save Project
                </button>
                <span className="reset-project route-link">Reset Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AddProj.propTypes = {
  changeView: React.PropTypes.func.isRequired,
  projChange: React.PropTypes.func.isRequired,
  createProject: React.PropTypes.func.isRequired,
};

export default AddProj;
