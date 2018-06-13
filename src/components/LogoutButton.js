import React from 'react'
import {Link} from 'react-router-dom'

export class LogoutButton extends React.Component {

  render() {
    return (
      <Link to='/app/signout'><p className='logout-button' onClick={this.props.logout}>Log Out</p></Link>
    )
  }
}
