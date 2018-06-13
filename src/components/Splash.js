import React from 'react'
import {Link} from 'react-router-dom'
import './splash.css'

export class Splash extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img className='splash-image' src='/logos/ezgif.com-gif-maker.gif' alt='' />
        <div className='start-container'>
          <h1 className='splash-title'>It's time to come home.</h1>
          <p className='spash-tag'>Join the Dumpr community, home to 2 million users and over a billion bathrooms world wide.</p>
          <Link to='/app/bathrooms'><button className="start-button">Get Started</button></Link>
        </div>
      </div>
    )
  }
}
