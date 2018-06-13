import React from 'react'
import {Link} from 'react-router-dom'
import './subheader.css'

export class Subheader extends React.Component {
  render() {
    return (
      <div className='subheader'>
        <div className='subheader-container'>
          <div className='views'>
            <Link to='/app/bathrooms'><button className='bathroom-view'>Bathrooms</button></Link>
            <Link to='/app/users'><button className='user-view'>Users</button></Link>
          </div>
          <div className='subheader-bottom'>
            {this.props.isAuthenticated
              ? <Link to='/app/createbathroom'><p className='create-bathroom'>Create New Bathroom</p></Link>
              : <p>Log in to add a bathroom!</p>
            }
          </div>
        </div>
      </div>
    )
  }
}
