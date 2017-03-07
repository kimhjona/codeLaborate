import React, { Component } from 'react';
import axios from 'axios';
import Login from './login.jsx';
import Signup from './signup.jsx';
import Dashboard from './dashboard.jsx';
import AddProj from './addProj.jsx';
import styles from './../../style.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      name: '',
      username: '',
      password: '',
      message: '',
      newProject: '',
      newProjectSummary: '',
    };

    this.signUpPost = this.signUpPost.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.userVerify = this.userVerify.bind(this);
    this.changeView = this.changeView.bind(this);
    this.projChange = this.projChange.bind(this);
    this.createProject = this.createProject.bind(this);
  }

// register new user on signup page, create new user in database, send client to login page
  signUpPost() {
    axios.post('/signup', {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }).then((res) => {
      this.setState({
        page: res.data.view,
        message: res.data.message,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

// verify user, send user to database
  userVerify() {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password,
    }).then((res) => {
      this.setState({ page: res.data.view, message: res.data.message });
    }).catch((error) => {
      console.log(error);
    });
  }

// create new project in database, send client to dashboard
  createProject() {
    axios.post('/createProject', {
      title: this.state.newProject,
      summary: this.state.newProjectSummary,
    }).then((res) => {
      this.setState({ page: res.data.view, message: res.data.message });
    }).catch((error) => {
      console.log(error);
    });
  }

// changes to appropriate view based on passed in variable
  changeView(page) {
    this.setState({ page });
  }

// wraps username input and sends username value to state
  usernameChange(e) {
    const state = {};
    state.username = e.target.value;
    this.setState(state);
  }

// wraps name input and sends name value to state
  nameChange(e) {
    const state = {};
    state.name = e.target.value;
    this.setState(state);
  }

// wraps password input and sends password value to state
  passwordChange(e) {
    const state = {};
    state.password = e.target.value;
    this.setState(state);
  }

// wraps project title input and sends project title value to state
  projChange(e) {
    const state = {};
    state.newProject = e.target.value;
    this.setState(state);
  }

// conditional rendering for components based on 'page' property in state
  render() {
    if (this.state.page === 'login') {
      return (
        <Login
          changeView={this.changeView}
          page={this.state.page}
          userVerify={this.userVerify}
          usernameChange={this.usernameChange}
          passwordChange={this.passwordChange}
          message={this.state.message}
        />
      );
    } else if (this.state.page === 'signup') {
      return (
        <Signup
          changeView={this.changeView}
          usernameChange={this.usernameChange}
          nameChange={this.nameChange}
          passwordChange={this.passwordChange}
          username={this.state.username}
          password={this.state.password}
          name={this.state.name}
          signUpPost={this.signUpPost}
          message={this.state.message}
        />
      );
    } else if (this.state.page === 'dash') {
      return (
        <Dashboard
          changeView={this.changeView}
        />
      );
    } else if (this.state.page === 'addProj') {
      return (
        <AddProj
          projChange={this.projChange}
          createProject={this.createProject}
          changeView={this.changeView}
        />
      );
    }
  }

}

export default App;
