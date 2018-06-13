import React from 'react'
import {Redirect} from 'react-router-dom'
import api from '../api'
import './login-form.css'

export class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      response: null
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    api.users.logIn(this.state.username, this.state.password)
    .then(user => {
      this.props.onSuccess({
        username: this.state.username,
        password: this.state.password
      }, user)
    })
    .catch(err => {
      this.setState({
        response: 'Invalid Username or Password'
      })
    })
  }

  render() {
    return (
      <div className='login-form-container'>
        <div>Log In</div>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input name='username' type='text' onChange={this.handleUsernameChange}></input>
            <label htmlFor='password'>Password</label>
            <input name='password' type='password' onChange={this.handlePasswordChange}></input>
            <input type='submit' value='Log In'></input>
          </div>
        </form>
        <div className='error-msg'>{this.state.response}</div>
        {this.props.isAuthenticated ? <Redirect to='/app/bathrooms' /> : null}
      </div>
    )
  }
}
