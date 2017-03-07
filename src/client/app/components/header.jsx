import React from 'react';

const Header = (props) => {
  const { changeView } = props;
  return (
    <header>
      <div className="container">
        <h1 className="logo"><a href="#" onClick={() => { changeView('dash'); }}><img src="http://i.imgur.com/dLQMwZp.png" alt="codeLaborate homepage" /></a></h1>
        <nav>
          <ul id="navigation">
            <li><a href="#" onClick={() => { changeView('dash'); }}>Dashboard</a></li>
            <li><a href="#" onClick={() => { changeView('addProj'); }}>Add Project</a></li>
            <li><a href="#" onClick={() => { changeView('dash'); }}>Profile</a></li>
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
