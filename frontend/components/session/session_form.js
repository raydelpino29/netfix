import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value} );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    debugger
  }

  render () {
    let header;
    let linker;
    if (this.props.formType === 'signup') {
      header = "Sign Up";
    } else {
      header = "Log In";
    }
    if (this.props.formType === 'signup') {
      linker = <Link to='/login'>Login</Link>;
    } else {
      linker = <Link to='/signup'>Sign Up</Link>;
    }
    const errorList = this.props.errors.map((error) => {
      return (
        <li>{error}</li>
      );
    });

    return (
      <div>
        {linker}
        <ul>
          {errorList}
        </ul>
        <h1>{header}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
