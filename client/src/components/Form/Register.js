import React, { Component } from 'react';
import { register } from './UserFunctions';
import { FormErrors } from './FormErrors';
import Navbar from './Navbar';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      formErrors: {first_name:'',last_name:'', email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      first_nameValid: false,
      last_nameValid: false,
      formValid: false
    }
  }

  //this.handleUserInput = this.handleUserInput.bind(this)
  //this.onSubmit = this.onSubmit.bind(this)
  //}

  //onChange(e) {
    //this.setState({ [e.target.name]: e.target.value })
 // }

 handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
  () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;
  let first_nameValid = this.state.first_nameValid;
  let last_nameValid = this.state.last_nameValid;


  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
      case 'first_name':
        first_nameValid= value.match(/^[a-zA-Z]+$/);
        fieldValidationErrors.first_name = first_nameValid ? '' : ' use only letters';
        break;
      case 'last_name':
        last_nameValid= value.match(/^[a-zA-Z]+$/);
        fieldValidationErrors.last_name = last_nameValid ? '' : 'use only letters';
        break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
    emailValid: emailValid,
    passwordValid: passwordValid, 
    last_nameValid: last_nameValid, 
    first_nameValid: first_nameValid, 
    }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.last_nameValid && this.state.first_nameValid});
}

//errorClass(error) {
  //return(error.length === 0 ? '' : 'has-error');
//}

  onSubmit(event) { //
    event.preventDefault();

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }
//
  render() {
    return (
      <div>
      <div>
      <Navbar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.first_name)}`}>
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  required className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.handleUserInput}
                />
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.last_name)}`}>
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  required className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.handleUserInput}
                />
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  required className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleUserInput}
                />
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  required className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleUserInput}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                disabled={!this.state.formValid}
                //onClick={this.handleFormSubmit}
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Register;