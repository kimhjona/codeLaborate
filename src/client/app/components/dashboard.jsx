import React from 'react';
import Header from './header.jsx';

const Dashboard = (props) => {
  const { changeView } = props;

  return (
    <div>
      <Header changeView={changeView} />
      <section id="main">
        <div className="container">
          <div className="content">
            <h2>Projects</h2>
            <p className="no-projects">
              You currently have no projects.&nbsp;
              <span
                className="route-link"
                onClick={() => { changeView('addProj'); }}
              >Create a project</span>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

Dashboard.propTypes = {
  changeView: React.PropTypes.func.isRequired,
};

export default Dashboard;
