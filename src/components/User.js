import React from 'react'
import './user.css'

export class User extends React.Component {
  render() {
    return (
      <div className='user'>
        <p>{this.props.user.user_name}</p>
      </div>
    )
  }
}
