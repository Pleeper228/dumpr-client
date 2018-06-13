import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import './create-user-form.css'

export class CreateUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: null
    }
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
  }

  handleUserSubmit(event) {
    event.preventDefault()
    var data = new FormData(event.target)
    fetch('http://localhost:3000/api/v1/users/', {
      method: 'POST',
      body: JSON.stringify({
        user_name: data.get('username'),
        password: data.get('password')
      }),
      headers: new Headers({"Content-Type": "application/json"}),
    })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.setState({
          response: res.message
        })
      } else {
        this.setState({
          response: <Redirect to='/app/login' />
        })
      }
    })
  }

  render() {
    return (
      <div className='create-user-form-container'>
        <div>Create New User</div>
        <form className='create-user-form' onSubmit={this.props.handleCreateUser}>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email Address</label>
            <input type='text' name='email'></input>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' required></input>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' required></input>
            <input type='submit' value='Create User'></input>
          </div>
        </form>
        <div className='error-msg'>{this.state.response}</div>
      </div>
    )
  }
}
