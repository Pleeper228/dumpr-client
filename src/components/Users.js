import React from 'react'
import {UsersContainer} from './UsersContainer'

export class Users extends React.Component {
  render() {
    return (
      <UsersContainer users={this.props.users}/>
    )
  }
}
