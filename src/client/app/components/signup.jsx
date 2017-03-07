import React from 'react';

const Signup = (props) => {
  const { message, name, username, password, nameChange, usernameChange,
          passwordChange, signUpPost, changeView } = props;

  return (
    <div id="auth">
      <img src="http://i.imgur.com/dLQMwZp.png" className="logo" alt="codeLaborate logo" />
      <h2>CodeLaborate</h2>
      <h5 id="message">{message}</h5>
      <h4>Sign Up</h4>
      <input
        className="name"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => { nameChange(e); }}
      />
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
      <button onClick={() => { signUpPost(); }} >Register</button>

      <p><a onClick={() => { changeView('login'); }} >Actually, I have an account!</a></p>
    </div>
  );
};

Signup.propTypes = {
  message: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  nameChange: React.PropTypes.func.isRequired,
  usernameChange: React.PropTypes.func.isRequired,
  passwordChange: React.PropTypes.func.isRequired,
  signUpPost: React.PropTypes.func.isRequired,
  changeView: React.PropTypes.func.isRequired,
};

export default Signup;
