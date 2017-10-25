import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value} );
    };
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processForm({ email: 'coolDude@gmail.com', password: 'starwars'});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.setState({ email: '', password: '' });
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
    let demoLogin;
    if (this.props.formType === 'login') {
      demoLogin = <button className='demo' onClick={this.handleDemo}>Demo Login</button>
    }

    return (
      <div className='session-form-container'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='form-content'>
            <h1 className='form-title'>{header}</h1>
            <ul>
              {errorList}
            </ul>
            <div className='form-inputs'>
              <label for='email'>Email</label>
              <br />
                <input id='email' type="text" value={this.state.email} onChange={this.handleChange('email')} />
              <br />
              <label for='password'>Password</label>
              <br />
                <input id='password' type="password" value={this.state.password} onChange={this.handleChange('password')} />
              <br />
              <button className='form-submit'>{this.props.formType}</button>
              <br />
                {demoLogin}
              <br />
              <button className='linker'>{linker}</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
