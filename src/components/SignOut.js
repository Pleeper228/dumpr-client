import React from 'react'
import './signout.css'

export class SignOut extends React.Component {
  componentDidMount() {
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')

    if (username && password) {
      this.props.logout()
    }
  }

  render() {
    return (
      <div className='signout-container'>
        <h1>You have been successfully logged out. Smell ya later!</h1>
      </div>
    )
  }
}
