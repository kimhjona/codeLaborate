import React from 'react';

const Header = (props) => {
  const { changeView } = props;
  return (
    <header>
      <div className="container">
        <h1 className="logo"><span onClick={() => { changeView('dash'); }}><img src="http://i.imgur.com/dLQMwZp.png" alt="codeLaborate homepage" /></span></h1>
        <nav>
          <ul id="navigation">
            <li><span onClick={() => { changeView('dash'); }}>Dashboard</span></li>
            <li><span onClick={() => { changeView('addProj'); }}>Add Project</span></li>
            <li><span onClick={() => { changeView('dash'); }}>Profile</span></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  changeView: React.PropTypes.func.isRequired,
};

export default Header;
