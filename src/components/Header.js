import React from 'react'
import {Link} from 'react-router-dom'
import {SearchBar} from './SearchBar'
import {LogoutButton} from './LogoutButton'
import {LoginButton} from './LoginButton'
import {SignUpButton} from './SignUpButton'
import './header.css'

export class Header extends React.Component {
  renderHeader() {
    let items = []
    if (this.props.isAuthenticated) {
      items.push(<span className='welcome'>{this.props.currentUser.user_name}</span>)
      items.push(<LogoutButton logout={this.props.logout}/>)
    } else {
      items.push(<Link to='/app/login'><LoginButton /></Link>)
      items.push(<Link to='/app/signup'><SignUpButton /></Link>)
    }
    return (
      <div className='app-header'>
        <div className='header-container'>
          <div className='navbar-left'>
            <Link to='/'><h1 className="app-title">dumpr</h1></Link>
            <a className='logo-link' href='/'><img className='logo' src='/logos/dumpr-logo-transparent-4.png' /></a>
          </div>
          <div className='navbar-right'>
            <SearchBar />
            <div className='user-info'>{items}</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <header className="">
        {this.renderHeader()}
      </header>
    )
  }
}
