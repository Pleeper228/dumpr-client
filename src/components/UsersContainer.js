import React from 'react'
import {User} from './User'

export class UsersContainer extends React.Component {
  render() {
    return (
      <div className='users-container'>
        <h2>Users</h2>
        <div className='users'>
          {this.props.users.map((user, index) => {
            return <User key={index} user={user} />
          })}
        </div>
      </div>
    )
  }
}
