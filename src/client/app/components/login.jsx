import React from 'react';

const Login = (props) => {
  const { message, username, password, usernameChange,
          passwordChange, userVerify, changeView } = props;

  return (
    <div id="auth">
      <img src="http://i.imgur.com/dLQMwZp.png" className="logo" alt="codeLaborate logo" />
      <h2>CodeLaborate</h2>
      <h5 id="message">{message}</h5>
      <h4>Log in</h4>
      <input
        className="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => { usernameChange(e); }}
      />
      <input
        className="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => { passwordChange(e); }}
      />
      <button onClick={() => { userVerify(); }} >Log in</button>
      <p>New User? <a onClick={() => { changeView('signup'); }}>Sign up here.</a></p>
    </div>
  );
};

Login.propTypes = {
  message: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  usernameChange: React.PropTypes.func.isRequired,
  passwordChange: React.PropTypes.func.isRequired,
  userVerify: React.PropTypes.func.isRequired,
  changeView: React.PropTypes.func.isRequired,
};

export default Login;
